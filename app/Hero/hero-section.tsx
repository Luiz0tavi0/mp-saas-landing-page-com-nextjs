import Paragraph from '@/components/typography/Paragraph'
import Title from '@/components/typography/Title'

export default async function HeroSection() {
  return <>
    <section id="hero" className="bg-transparent 
    justify-between mx-1 w-full
    text-center">
      <div className="text-center">
        <div className="my-0">
          <Title text="Simplifique Seus Estudos" />
        </div>
      </div>
      <Paragraph text="Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação." />

    </section >

  </>
}
