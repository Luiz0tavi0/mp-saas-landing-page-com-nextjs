import Image from "next/image";
import { Check } from "lucide-react";

export default function HowWorks() {
  return (
    <section id="how-work" className="bg-white w-full text-center py-12 px-4">
      <div className="flex w-full justify-center">
        <h1 className="font-bold tracking-[-1px] 
        text-[20px] leading-[45px] xl:text-[40px] xl:leading-[87px]">
          Como funciona?
        </h1>
      </div>

      {/* FORÇA 2 COLUNAS DESDE O MENOR BREAKPOINT (320px até infinito) */}
      <div className="grid grid-cols-2 gap-2 xl:gap-16 max-w-4xl mx-auto mt-12 items-center">

        {/* Imagem da mulher - à esquerda */}
        <div className="relative h-64 xl:h-96">
          <Image
            src="/woman.svg"
            alt="Mulher carregando caixas"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Lista - à direita */}
        <ul className="space-y-4 xl:space-y-8 text-right">
          <li className="flex items-center justify-end gap-2 lg:gap-4">
            <span className="font-regular text-[12px] leading-[35px] xl:text-[30px]">
              Acesso a 1 ebook por mês
            </span>
            <Check className="w-5 h-5 xl:w-8 xl:h-8 text-green-500 font-bold stroke-3 shrink-0" />
          </li>
          <li className="flex items-center justify-end gap-3 xl:gap-4">
            <span className="font-regular text-[12px] leading-[35px] xl:text-[30px]">
              Curadoria especial
            </span>
            <Check className="w-5 h-5 xl:w-8 xl:h-8 text-green-500 font-bold stroke-3 shrink-0" />
          </li>
          <li className="flex items-center justify-end gap-3 xl:gap-4">
            <span className="font-regular text-[12px] leading-[35px] xl:text-[30px]">
              Cancele quando quiser
            </span>
            <Check className="w-5 h-5 xl:w-8 xl:h-8 text-green-500 font-bold stroke-3 shrink-0" />
          </li>
        </ul>
      </div>
    </section>
  );
}