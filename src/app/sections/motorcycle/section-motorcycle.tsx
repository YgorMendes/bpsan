// import Button from '@/components/button/button'
import Title from '@/components/title/title'
import React from 'react'
import Motorcycle from '../../../assets/motorcycle.png'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });

function SectionMotorcycle() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+minha+moto."
    );
  }

  return (
    <section className="section-motorcycle padding-df">
      <Image src={Motorcycle} alt="motoqueiro passeando de moto" />
      <Title size="md">
        Proteja sua moto
      </Title>
      <p className="description">
        Seguro para sua moto <b>ZERO KM</b>, e para sua
        moto <b>ANTIGA.</b>
      </p>

      <Button onClick={() => sendMessage()}>COTAÇÃO PARA MOTO</Button>
    </section>
  )
}

export default SectionMotorcycle