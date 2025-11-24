import Image from "next/image"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuPortal,

} from "@/components/ui/dropdown-menu"
import { Button } from "./button"


export default function Nav() {
    return <nav className=' flex h-10 justify-between items-center w-full p-4 pt-6 xl:pt-15'>
        <Image
            alt="Logo SaaS"
            height={40} width={142.05}
            src='/Logo.svg'
        />

        <div className="text-sm leading-10 hidden xl:inline
        tracking-[-1px]">
            <Button variant={"ghost"}>Funcionamento</Button>
            <Button variant={"ghost"}>Preço</Button>
            <Button variant={"outline"}>Login</Button>

        </div>
        <div className="inline xl:hidden">
            <DropdownMenu modal={false} >
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center">
                        <Image alt="aplication menu" height={24} width={25.33} src='/menu.svg' />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    sideOffset={8}
                    align="end"
                    alignOffset={-8}
                    className="z-50"
                    avoidCollisions={true}
                    collisionPadding={8}
                >
                    <DropdownMenuItem>Login</DropdownMenuItem>
                    <DropdownMenuItem>Preço</DropdownMenuItem>
                    <DropdownMenuItem>Funcionamento</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav >
}