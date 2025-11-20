import Image from "next/image"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Nav() {
    return <nav className=' flex h-10 justify-between items-center w-full'>
        <Image
            alt="Logo SaaS"
            height={40} width={142.05}
            src='/Logo.svg'
        />

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image
                    alt="aplication menu"
                    height={24} width={25.33}
                    src='/menu.svg'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Login</DropdownMenuItem>                
                <DropdownMenuItem>Preço</DropdownMenuItem>
                <DropdownMenuItem>Funcionamento</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </nav >
}