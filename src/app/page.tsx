'use client';

import Title from "@/components/title/title";
import Item from "@/components/item/item";
// import Button from "@/components/button/button";
const Button = dynamic(() => import('@/components/button/button'), { ssr: false });
import Question from "@/components/question/question";
import App99 from "@/assets/app99";
import AppUber from "@/assets/app-uber";
import SectionCar from "./sections/car/section-car";
import SectionMotorcycle from "./sections/motorcycle/section-motorcycle";
import SectionTruck from "./sections/truck/section-truck";
import SectionOldCar from "./sections/old-car/section-old-car";
import SectionFleet from "./sections/fleet/section-fleet";
import dynamic from "next/dynamic";

export default function Home() {
  const items = [
    "100% da tabela FIPE.",
    "Furto, Roubo e Colisão",
    "Cobertura Nacional",
    "Fenômenos naturais",
    "Assistência 24h",
    "Vidros e Faróis",
    "Terceiros"
  ];

  const questions = [
    {
      question: 'Você sabe que é SUSEP?',
      response: 'SUSEP é o Órgão regulador de seguros, ou seja uma Garantia de que você realmente vai ser indenizado caso precise.'
    },
    {
      question: 'E qual a diferença da Bem Protege Seguros e outras seguradoras?',
      response: 'SUSEP é o Órgão regulador de seguros, ou seja uma Garantia de que você realmente vai ser indenizado caso precise.'
    }
  ];

  function sendMessageSpeed() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AGostaria+de+fazer+uma+cota%C3%A7%C3%A3o."
    );
  }

  function sendMessageRacer() {
    window.open(
      "https://api.whatsapp.com/send?phone=+5511983105012&text=Ol%C3%A1!%0A%0AEstou+interessado+no+desconto+para+motorista+de+aplicativo."
    );
  }

  return (
    <main className="home">
      <header className="header padding-df" />

      <section className="section-presentation dark-blue padding-df">
        <Title>
          <i className="blue">BEM PROTEGE</i> Segura, Justa e sem Burocracia
        </Title>
        <p className="section-presentation_subtitle">
          Já são <b>15 anos</b> de história,<b> 350 mil Clientes</b> em todo
          Brasil, Oficinas credenciadas, atendimento 100% humanizado.
        </p>
        <p className="section-presentation_show-coverage">Conheça nossas coberturas:</p>

        <ul>
          {items.map((item) => {
            return <Item key={item} text={item} />
          })}
        </ul>

        <Button onClick={() => sendMessageSpeed()}>COTAÇÃO RÁPIDA</Button>
      </section>

      <section className="section-susep padding-df">
        <Title size="md">
          Segurança da SUSEP e preço Justo.
        </Title>
        <p className="description">
          Você já imaginou ter um seguro veicular <b>autorizado pela SUSEP</b>
          e que realmente pensa no seu bolso?
          <br />
          <br />
          A Bem Protege existe pra isso, unir o melhor dos dois mundos.
        </p>

        <ul className="questions">
          {questions.map(({ question, response }) => {
            return <Question key={question} question={question} response={response} />
          })}
        </ul>
      </section>

      <section className="section-app-racer padding-df">
        <Title size="md">
          Desconto especial pra motorista de aplicativo
        </Title>
        <p className="description">
          Nós da Bem Protege pensamos no seu bolso.
        </p>

        <div className="section-app-racer_apps">
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
          <App99 />
          <AppUber />
        </div>

        <Button onClick={sendMessageRacer}>COTAÇÃO MOTORISTA APP</Button>
      </section>

      <SectionCar />
      <SectionMotorcycle />
      <SectionTruck />
      <SectionOldCar />
      <SectionFleet />
    </main>
  );
}

// export default dynamic(() => Promise.resolve(Home), {
//   ssr: false,
// });