import { Button } from "@/components/ui/button";

export default async function HeroSection() {
  return <>
    <section id="hero" className="bg-transparent 
    justify-between mx-1 w-full
    text-center">
      <div className='mt-15'>
        <div>
          <h1 className="text-[25px] leading-[45px] font-bold tracking-[-1px]">
            {'Simplifique Seus Estudos'}
          </h1>
        </div>
      </div>
      <h2 className="text-[12px] leading-[15px] font-normal tracking-[0px]
        text-[#6B7280]">
        {'Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.'}
      </h2>
      
      <div className="flex flex-col justify-between min-h-20.5 mt-15">
        <div className="flex justify-between items-center h-9 w-full px-3">
          <input
            type="text" name="email" placeholder="Coloque seu email"
            className="bg-white h-full font-normal text-sm leading-5 outline-none          
          border-[0.5px] border-[#CCCCCC] rounded-[6px] px-3 py-2 focus:border-[#cccccc]
          min-w-59
          " />

          <Button className="h-full min-w-23 rounded-[6px] font-normal line-he text-[10px] leading-5">Assine Agora</Button>

        </div>
        <p className="leading-5 text-[10px] font-light tracking-normal ">Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
      </div>

    </section >

  </>
}
