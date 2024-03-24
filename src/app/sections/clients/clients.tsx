import Title from '@/components/title/title'
import React from 'react'
import Client1 from '../../../assets/client1.png';
import Client2 from '../../../assets/client2.png';
import Client3 from '../../../assets/client3.png';
import Client4 from '../../../assets/client4.png';
import Client5 from '../../../assets/client5.png';

import './styles.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Carousel } from 'antd';

function Clients() {
  return (
    <section className="section-clients padding-df">
      <Carousel autoplay>
        <div>
          <Image src={Client1} alt="Carro antigo Gol Quadrado" />
        </div>
        <div>
          <Image src={Client2} alt="Carro antigo Kadett" />
        </div>
        <div>
          <Image src={Client3} alt="Carro antigo Kadett 76" />
        </div>
        <div>
          <Image src={Client4} alt="Carro antigo Kombi" />
        </div>
        <div>
          <Image src={Client5} alt="Carro antigo Brazilia" />
        </div>
      </Carousel>

      <Title size="md">
        Junte-se à família de clientes satisfeitos
      </Title>
      <p className="description">
        Nossos clientes estão sempre felizes com nosso serviço de seguro veicular. Junte-se a eles e descubra como é dirigir com confiança e tranquilidade!
      </p>
    </section>
  )
}

export default Clients