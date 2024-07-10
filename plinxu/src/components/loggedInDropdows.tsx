"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { CreditCard, Home, Loader2, LogOut, Square, BarChart3, ArrowBigUpDash, Projector, Settings} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { toast } from "sonner";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  const router = useRouter();

  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/" className="w-full">
            <Home size={16} className="mr-2" />
            Landing
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
        <Link href="/dashboard" className="w-full">
            <BarChart3 size={16} className="mr-2 inline" />
            Dashboard
          </Link>
        </DropdownMenuItem>

      <div className="block">

        <DropdownMenuItem>
        <Link href="/dashboard/transfer" className="w-full">
            <Projector size={16} className="mr-2 inline" />
            Transfer
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
        <Link href="/dashboard/transactionHistory" className="w-full">
            <Settings size={16} className="mr-2 inline" />
            Transactions
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
        <Link href="/dashboard/settings" className="w-full">
            <Settings size={16} className="mr-2 inline" />
            Settings
          </Link>
        </DropdownMenuItem>


      </div>


        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut size={16} className="mr-2" />
          <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};