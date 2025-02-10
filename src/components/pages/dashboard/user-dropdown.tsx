import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild> 
        <Button
          
          variant="ghost"
          className="w-full gap-2 justify-start px-2"
        >
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://avatars.githubusercontent.com/u/92932184?v=4" />
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <p>Lucas Passos</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <Link passHref href="/dashboard/account">
            <DropdownMenuItem className="gap-2">
                <SquareUser size={16}/>
                Configurações de Conta
            </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="gap-2 text-red-500">
                <LogOut size={16}/>
                Sair
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
};
