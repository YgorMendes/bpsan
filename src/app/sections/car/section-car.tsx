const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import Title from '@/components/title/title'
import React from 'react'
import Car from '../../../assets/onix-hb20.webp'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function SectionCar() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+meu+carro+de+passeio."
    );
  }

  return (
    <section className="section-car padding-df">
      <Image src={Car} alt="carro de passeio" />
      <Title size="md">
        Proteja seu carro de passeio
      </Title>
      <p className="description">
        Seguro completo <b>+</b> assistência chaveiro borracheiro, <b>SEM PERFIL DE CONDUTOR</b>.
      </p>

      <Button onClick={() => sendMessage()}>COTAÇÃO CARRO PASSEIO</Button>
    </section>
  )
}

export default SectionCar