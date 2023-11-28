// import Button from '@/components/button/button'
import Title from '@/components/title/title'
import React from 'react'
import OldCar from '../../../assets/old-car.png'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });

function SectionOldCar() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+minha+rel%C3%ADquia."
    );
  }

  return (
    <section className="section-old-car padding-df">
      <Image src={OldCar} alt="Carro antigo dos anos 2000" />
      <Title size="md">
        Proteja sua Relíquia
      </Title>
      <p className="description">
        Seu veículo Antigo tem aceitação aqui na Bem
        Protege também, <b>indenização é 100% da Fipe</b>.
      </p>

      <Button onClick={() => sendMessage()}>COTAÇÃO PARA RELÍQUIA</Button>
    </section>
  )
}

export default SectionOldCar