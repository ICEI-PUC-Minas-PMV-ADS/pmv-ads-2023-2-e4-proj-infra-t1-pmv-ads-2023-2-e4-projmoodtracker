import { Container } from "./styles";

export function ButtonText({ title, svg, ...rest}){
  return (
    <Container type="button">
      {title}
    </Container>
  );
}