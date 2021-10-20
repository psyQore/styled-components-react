import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover {
    box-shadow: 2px 2px 7px rgb(0, 0, 0, 0.6);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }

  .info {
    font-size: 28px;
  }
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  margin-top: 10px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props} ></a>;
};

const StyledLink = styled(Link)`
  color: blue;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  color: props.color || "red",
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
  type: 'password'
})`

`;

const App = () => {
  return (
    <Content>
      <P>Hello World</P>
      <Button>
        Enviar <p className='info'>Info</p>
      </Button>
      <Button className='secondary'>Enviar</Button>
      <Button primary>Enviar</Button>
      <BlockButton primary as='a' href='#'>
        Enviar
      </BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con Estilo</StyledLink>
      <Input />
      <Password />
    </Content>
  );
};

export default App;
