// import Button from '@/components/button/button'
import Title from '@/components/title/title'
import React from 'react'
import Fleet from '../../../assets/truck-fleet.jpg'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });

function SectionFleet() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+no+desconto+para+minha+frota."
    );
  }

  return (
    <section className="section-fleet padding-df">
      <Image src={Fleet} alt="Frota de utilitários, caminhões, vãs, carros e burgões." />
      <Title size="md">
        Proteja sua frota
      </Title>
      <p className="description">
        <b>Desconto exclusivo</b> para sua frota.
      </p>

      <Button onClick={() => sendMessage()}>COTAÇÃO PARA FROTAS</Button>
    </section>
  )
}

export default SectionFleet