import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PLAN_FEATURES = [
  "Acesso a 1 ebook por mês",
  "Curadoria especial",
  "Acesso ilimitado",
  "Cancele a qualquer momento"
];

export default function PriceSection() {
  return (
    <section id="pricing" className="bg-transparent w-full text-center p-4 mb-10">
      <h2 className="text-2xl leading-11 xl:text-6xl xl:leading-[87px] font-bold tracking-[-1px] mt-8">
        Preço Simples e Transparente
      </h2>

      <p className="text-xs leading-4 text-center
       text-[#6B7280] mx-auto
       max-w-[337px] xl:max-w-[827px]
       xl:leading-[35px] xl:text-xl
       mb-10
       ">
        Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? 
        Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. 
        E por menos de um café por dia.
      </p>
      <div className="bg-white rounded-3xl
        xl:w-[418px]
        xl:text-[24px]
        border border-gray-200
        w-full max-w-[353px] xl:max-w-[503px] 
        mx-auto p-6 flex flex-col gap-6"
      >

        <div className="text-left space-y-2">
          <h3 className="text-[20px] leading-[87px] xl:text-[24px] font-semibold">
            Plano Pro Premium VIP
          </h3>
          <p className="text-[#6B7280] text-sm xl:text-base">
            Tudo que você precisa para seus estudos
          </p>
          <p className="text-2xl xl:text-[54px] font-bold">
            R$29
            <span className="text-[#6B7280] ml-1 text-base font-normal">/mês</span>
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3" role="list">
          {PLAN_FEATURES.map((text) => (
            <li key={text} className="flex items-center gap-3">
              <Check
                className="w-5 h-5 xl:w-6 xl:h-6 text-green-500 stroke-3 shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm xl:text-base">{text}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full" size="lg">
          Assine Agora
        </Button>
      </div>
    </section>
  );
}