import Image from "next/image";
import { Check } from "lucide-react";

export default function HowWorks() {
  return (
    <section id="how-work" className="bg-white w-full min-w-full text-center py-12 px-4">
      <div className="flex w-full justify-center">
        <h1 className="font-bold tracking-[-1px] 
        text-[20px] leading-[45px] xl:text-[40px] xl:leading-[87px]">
          Como funciona?
        </h1>
      </div>

      <div className="flex flex-row 
      w-[clamp(353px,calc(353px+0.52245*(100vw-393px)),900.50px)]
      mx-auto items-center justify-between">

        <div className="relative
         w-[clamp(176px,calc(176px+0.25645*(100vw-393px)),445px)] 
         h-[clamp(256px,calc(256px+0.13753*(100vw-393px)),400px)]">
          <Image
            src="/woman.svg"
            alt="Mulher carregando caixas"
            fill
            className="object-contain"
            priority
          />
        </div>

        <ul className="space-y-[clamp(16px,calc(16px+0.03819*(100vw-393px)),56px)] text-right">
          {[
            "Acesso a 1 ebook por mês",
            "Curadoria especial",
            "Cancele quando quiser"
          ].map((text) => (
            <li key={text} className="flex items-center justify-end 
      gap-[clamp(8px,calc(8px+0.01528*(100vw-393px)),24px)]">
              <span className="text-[clamp(12px,calc(12px+0.01719*(100vw-393px)),30px)] leading-[35px]">
                {text}
              </span>
              <Check className="w-[clamp(20px,calc(20px+0.01146*(100vw-393px)),32px)] 
        h-[clamp(20px,calc(20px+0.01146*(100vw-393px)),32px)] 
        text-green-500 stroke-3 shrink-0" />
            </li>
          ))}
        </ul>      
    </div>
    </section >
  );
}