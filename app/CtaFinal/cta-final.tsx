import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CtaFinal() {
  return (
    <section id="final" className="bg-white w-full text-center p-4">
      <h2 className="text-4xl leading-11
       xl:text-6xl xl:leading-[87px]
       font-bold tracking-[-1px] mt-8 mb-5">
        Pronto Para Mudar Sua Vida?
      </h2>

      <p className="text-xl leading-6 text-center
       text-[#6B7280] mx-auto
       max-w-[352px] xl:max-w-[633px]
       xl:leading-[35px] xl:text-xl
       mb-10 px-5">
        Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos
      </p>
      <div className="w-[280px] ls:w-max-[422px] mx-auto leading-[35px] mb-20">
        <Button className="w-full text-sm" size="lg">
          Assine Agora
        </Button>
        <p className="text-[10px] leading-5 xl:leading-9 font-light text-[#6B7280]">
          Comece sua assinatura agora mesmo. Cancele quando quiser.
        </p>
      </div>

      <footer className="flex flex-col w-full justify-center items-center mb-9">
        <Image src={"Logo.svg"} width={129} height={42} alt="logo footer" />
        <p className="text-[10px] leading-5 xl:leading-9 font-light text-[#6B7280]">
          © 2025 LivroSaaS. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}