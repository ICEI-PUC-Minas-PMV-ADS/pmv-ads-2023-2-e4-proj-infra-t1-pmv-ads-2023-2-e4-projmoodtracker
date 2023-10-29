import { Container } from "../Section/styles";

export function Section({ title, children }) {
  return (
    <Container>
        <h2 style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>{title}</h2>
        {children}
    </Container>
  );
}