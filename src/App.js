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
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
`;

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
  margin-top: 10px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};

const StyledLink = styled(Link)`
  color: blue;
`;

const App = () => {
  return (
    <Content>
      <P>Hello World</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
      <BlockButton primary as='a' href='#'>
        Enviar
      </BlockButton>
      <BlockButton primary>Enviar</BlockButton>
      <Link>Link</Link> <br />
      <StyledLink>Link con Estilo</StyledLink>
    </Content>
  );
};
export default App;
