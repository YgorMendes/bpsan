// import Button from '@/components/button/button'
import Title from '@/components/title/title'
import React from 'react'
import Truck from '../../../assets/scania.webp'
import Bongo from '../../../assets/bongo.jpg'
import Hr from '../../../assets/hr.jpg'
import Master from '../../../assets/renault-master.jpeg'
import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import { Carousel } from 'antd';

function SectionTruck() {
  function sendMessage() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+na+prote%C3%A7%C3%A3o+para+meu+caminh%C3%A3o/V%C3%A3."
    );
  }

  return (
    <section className="section-truck padding-df">
      <Carousel autoplay>
        <div>
          <Image src={Truck} alt="Caminhão Pesado" />
        </div>
        <div>
          <Image src={Master} alt="Vã" />
        </div>
        <div>
          <Image src={Bongo} alt="Carro antigo Kadett 76" />
        </div>
        <div>
          <Image src={Hr} alt="Carro antigo Kombi" />
        </div>
      </Carousel>

      <Title size="md">
        Proteção para Caminhão e Vans
      </Title>
      <p className="description">
        O seguro do seu utilitário <b>+ PROTEÇÃO DE
          PARABRISAS</b>.
      </p>

      <Button onClick={() => sendMessage()}>COTAÇÃO PARA UTILITÁRIOS</Button>
    </section>
  )
}

export default SectionTruck