
import { SignOutButton } from "./SignOutButton";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Lang from "@/components/core/lang/Lang";
import { UserRound, UserRoundCog } from "lucide-react";
import Logo from "../brand/Logo";


import Link from "next/link";

export default async function Header() {


  return (
    <header className="fixed top-0 z-40 flex w-full transition-all border-b border-border/15 backdrop-blur-xl bg-background/60">
      <div className="container flex items-center justify-between h-14 max-w-screen-2xl">
        <nav className="flex items-center gap-3 text-sm md:gap-6">
          <Link
            href="/"
            className="flex items-center"
            title="Firestarta - Next.js SaaS Boilerplate"
          >
            <Logo className="h-[22px] mr-2" />
            <span>
              <b className="text-gray-800 dark:text-white">Firestarta</b>
            </span>
          </Link>
          <Link
            href="/users"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Users
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pricing
          </Link>
        </nav>
        
      </div>
    </header>
  );
}
