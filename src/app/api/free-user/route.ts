import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, telefone, nome } = body

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [
          { email },
          { telefone }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Já existe um usuário com este e-mail ou telefone.' },
        { status: 400 }
      )
    }

    const user = await prisma.users.create({
      data: {
        email,
        telefone,
        nome
      }
    })

    const conta = await prisma.contas.create({
      data: {
        nome: 'Conta Free'
      }
    })

    await prisma.userContas.create({
      data: {
        userId: user.id,
        contaId: conta.id
      }
    })

    const plano = await prisma.planos.create({
      data: {
        planoPriceId: 1,
        inicio: new Date(),
        fim: new Date(new Date().setFullYear(new Date().getFullYear() + 100)),
        periodoPagamento: 'free'
      }
    })

    await prisma.planoContas.create({
      data: {
        contaId: conta.id, // Relacionando a conta ao plano
        planoId: plano.id, // Relacionando o plano à conta
      },
    });

    
    await prisma.userPlanos.create({
      data: {
        userId: user.id,
        planoId: plano.id
      }
    })

    await fetch('https://8f2d-93-127-136-225.ngrok-free.app/executar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        telefone: telefone
      })
    })
      .then(res => res.json())
      .then(data => console.log('✅ Resposta:', data))
      .catch(err => console.error('❌ Erro:', err));
    

    

    return NextResponse.json({
      message: 'Usuário com plano free criado com sucesso!',
      user,
      conta,
      plano
    }, { status: 201 })

  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ error: 'Erro desconhecido' }, { status: 500 })
  }
}
