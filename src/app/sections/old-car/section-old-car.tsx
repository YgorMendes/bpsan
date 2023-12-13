// import Button from '@/components/button/button'
import Title from '@/components/title/title'
import React from 'react'
import GolQuadrado from '../../../assets/gol-quadrado.webp'
import OldKadett from '../../../assets/old-car.jpg'
import Kadett from '../../../assets/kadett.webp'
import Fusca from '../../../assets/fusca.jpg'
import Kombi from '../../../assets/kombi.jpg'
import Brazilia from '../../../assets/brazilia.jpg'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Carousel } from 'antd';
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });

function SectionOldCar() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+minha+rel%C3%ADquia."
    );
  }

  return (
    <section className="section-old-car padding-df">
      <Carousel autoplay>
        <div>
          <Image src={GolQuadrado} alt="Carro antigo Gol Quadrado" />
        </div>
        <div>
          <Image src={Kadett} alt="Carro antigo Kadett" />
        </div>
        <div>
          <Image src={OldKadett} alt="Carro antigo Kadett 76" />
        </div>
        <div>
          <Image src={Kombi} alt="Carro antigo Kombi" />
        </div>
        <div>
          <Image src={Brazilia} alt="Carro antigo Brazilia" />
        </div>
        <div>
          <Image src={Fusca} alt="Carro antigo Fusca" />
        </div>
      </Carousel>

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