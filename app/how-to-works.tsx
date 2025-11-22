import Image from "next/image";
import { Check } from "lucide-react";

export default function HowWorks() {
    return (
        <section id="how-work" className="bg-white w-full text-center p-4">
            <div className='flex mt-12 w-full justify-center'>
                <h1 className="text-xl leading-[45px] font-bold tracking-[-1px]">
                    Como funciona?
                </h1>
            </div>
            <div className="flex flex-row justify-center gap-4">
                <div className="flex-1 relative">
                    <Image
                        src='/woman.svg'
                        alt='woman carrying boxes'
                        fill
                        className="object-fit"
                    />
                </div>
                <div className="flex-1">
                    <ul className="space-y-0 font-regular text-[20px] leanding-[20px]" >
                        <li className="flex items-center justify-end gap-3">
                            <span>Acesso a 1 ebook por mês</span>
                            <Check className="w-5 h-5 font-bold-900 text-green-500  stroke[3]" />
                        </li>
                        <li className="flex items-center justify-end gap-3">
                            <span>Curadoria especial</span>
                            <Check className="w-5 h-5 font-bold text-green-500  stroke[3]" />
                        </li>
                        <li className="flex items-center justify-end gap-3">
                            <span>Cancele quando quiser</span>
                            <Check className="w-5 h-5 font-bold text-green-500  stroke[3]" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}