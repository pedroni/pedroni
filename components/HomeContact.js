import React, { useState, useCallback, useRef } from "react";
import Box from "./Box";
import Title from "./Title";
import BoxContent from "./BoxContent";
import HomeContactForm from "./HomeContactForm";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import useMobile from "../hooks/useMobile";

const HomeContact = (props) => {
  const [activeListItem, setActiveListItem] = useState("");
  const isMobile = useMobile();

  return (
    <Box
      {...props}
      direction="bottom right"
      asideProps={{
        style: {
          width: "250px",
          flex: "0 0 250px",
          textAlign: "left",
        },
      }}
      aside={
        !isMobile && (
          <HomeContactAside
            activeListItem={activeListItem}
            onListItemSelected={(key) => setActiveListItem(key)}
          />
        )
      }
    >
      <Title
        direction="right"
        color="secondary"
        subTitle="Contato"
        title={<h2>Me mande uma mensagem</h2>}
      />
      <BoxContent>
        Está pensando em criar algo novo? Precisa de um desenvolvedor para fazer
        isso? Entre em contato comigo.
        {isMobile && (
          <HomeContactAside
            activeListItem={activeListItem}
            onListItemSelected={(key) => setActiveListItem(key)}
          />
        )}
        <HomeContactForm style={{ marginTop: 32 }} />
      </BoxContent>
    </Box>
  );
};

const HomeContactAside = ({
  activeListItem,
  onListItemSelected = () => {},
}) => {
  return (
    <>
      <img
        src="/img/04.png"
        height="160"
        srcSet="/img/04.png 1x, /img/04@2x.png 2x,"
        alt=""
        className="brightness--2 hide-mobile"
        style={{ marginBottom: 16 }}
      />
      <div>
        Quer uma resposta mais rápida? Envie um{" "}
        <a href="mailto:ola@lucaspedroni.com.br">
          <strong>e-mail</strong>
        </a>{" "}
        ou me chame no{" "}
        <a
          target="blank"
          href="https://wa.me/5554984256224"
          style={{ color: "var(--color-secondary)" }}
        >
          <strong>WhatsApp</strong>
        </a>
        . Você também pode me mandar uma mensagem no{" "}
        <a
          href="https://www.linkedin.com/in/lucas-pedroni-422460164/"
          target="blank"
        >
          <strong>LinkedIn</strong>
        </a>
        .
      </div>
    </>
  );
};

export default HomeContact;
