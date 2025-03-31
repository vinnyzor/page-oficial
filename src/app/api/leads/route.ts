import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { whatsapp, plano, periodo, origem, url } = await req.json()

    if (!whatsapp || !plano || !periodo || !origem || !url) {
      return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: {
        whatsapp,
        plano,
        periodo,
        origem,
        url,
      },
    })

    return NextResponse.json({ message: 'Lead registrado com sucesso', lead })
  } catch (error) {
    console.error('Erro ao salvar lead:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
