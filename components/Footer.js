import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div>
          <img
            className="logo"
            src="/img/isotipo.svg"
            alt="Lucas Pedroni isotipo"
          />
        </div>
        <div>
          <strong>WhatsApp</strong>
          <br />
          <a href="https://wa.me/5554984256224">(54) 98425-6224</a>
        </div>
        <div>
          <strong>E-mail</strong>
          <br />
          <a href="mailto:ola@lucaspedroni.com.br">ola@lucaspedroni.com.br</a>
        </div>
        <div>
          <strong>Quer saber mais sobre mim?</strong>
          <br />
          <a
            href="https://www.linkedin.com/in/lucas-pedroni-422460164/"
            target="blank"
          >
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/pedroni" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  padding-bottom: 26px;
  min-height: 700px;
  padding-top: 528px;
  margin-top: -400px;
  background-image: linear-gradient(transparent, black);
  z-index: -1;
  color: rgba(255, 255, 255, 0.7);
  & > div {
    width: var(--container-width);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    @media (max-width: 1280px) {
      flex-wrap: wrap;
      padding-left: 16px;
      padding-right: 16px;
    }
    & > div {
      flex: 0 0 25%;
      line-height: 180%;
      @media (max-width: 1280px) {
        flex: 0 0 100%;
        margin-bottom: 16px;
      }
      strong {
        color: var(--color-primary-light);
      }
      a {
        color: inherit;
      }
      .logo {
        width: 90px;
      }
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 10px;
    width: 100%;
    background: linear-gradient(
      135deg,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
    border-top-left-radius: 10px;
  }
`;

export default Footer;
