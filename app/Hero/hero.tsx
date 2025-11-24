import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-transparent w-full text-center p-4">
      <div className='flex mt-16 w-full justify-center'>
        <h1 className="
        text-[25px] leading-[45px] 
        xl:text-6xl xl:leading-22 
        font-bold tracking-[-1px]">
          Simplifique Seus Estudos
        </h1>
      </div>

      <div className="max-w-4xl mx-auto mb-15">
        <p className="text-[12px] leading-[15px]
        xl:text-4xl xl:leading-9
        font-normal text-[#6B7280]
        ">
          Deixe que nós fazemos a curadoria para você.
          Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>
      </div>

      <div className="flex flex-col gap-2 mx-auto
      text-[12px] leading-[15px]
      max-w-[334px]
      xl:max-w-[412px]
      
      ">
        <div className="flex gap-2 mb-7 items-center">
          <input
            type="email"
            name="cta_email"
            placeholder="Coloque seu email"
            className="flex-1 h-9 
            text-[12px] leading-5
             xl:leading-9 xl:text-sm
              bg-white outline-none border-[0.5px] 
              border-[#CCCCCC] rounded-md px-2 py-2
              focus:border-[#CCCCCC]"
          />
          <Button className="h-9 px-4 rounded-md text-[10px] leading-5 font-normal whitespace-nowrap
          xl:leading-9 xl:text-sm">
            Assine Agora
          </Button>
        </div>
        <p className="text-[10px] leading-5 xl:leading-9 font-light text-[#6B7280]">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}