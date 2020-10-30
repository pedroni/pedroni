import React from "react";
import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

const HomeContactForm = (props) => {
  return (
    <StyledContactForm {...props}>
      <div>
        <Input
          style={{
            borderTopLeftRadius: 16,
          }}
          name="name"
          label="Nome"
          type="text"
        />
      </div>
      <div>
        <Input
          required
          name="whatsapp"
          label="WhatsApp ou e-mail"
          type="text"
        />
      </div>
      <div>
        <Input
          required
          style={{
            borderBottomRightRadius: 16,
          }}
          name="message"
          label="Sobre o que você quer conversar?"
          type="text"
        />
      </div>
      <div>
        <Button type="submit">Enviar mensagem</Button>
      </div>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.form`
text-align: left;
  & > div {
    margin-bottom: 16px;
  }
`;

export default HomeContactForm;
