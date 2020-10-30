import React, { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Box from "../components/Box";
import Title from "../components/Title";
import HomeContactForm from "../components/HomeContactForm";
import styled from "styled-components";
import BoxContent from "../components/BoxContent";
const Page404 = () => {
  const router = useRouter();

  return (
    <Layout>
      <Box
        style={{
          margin: '200px auto'
        }}
        aside={
          <img
            src="/img/01.png"
            height="160"
            srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
            alt=""
            className="brightness--2"
            style={{ marginBottom: 16 }}
          />
          
        }
      >
        <Title
          subTitle="PÁGINA NÃO ENCONTRADA"
          title={<h1>O que você procura?</h1>}
        ></Title>
        <BoxContent>Volte para a página inicial <Link href="/"><a>clicando aqui </a></Link> ou entre em contato comigo no formulário abaixo. Você também pode me chamar no <a href="https://wa.me/55984256224">WhatsApp</a>.
        <br/>
        <br/></BoxContent>
        <HomeContactForm></HomeContactForm>
      </Box>
    </Layout>
  );
};


export default Page404;
