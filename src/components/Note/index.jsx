import { Container } from "./styles";

export function Note({ day, mes, texto }) {
  return (
    <div style={{display: 'flex', padding: 20, alignItems: 'center', justifyContent: 'flex-start'}}>
      <div style={{ width: '5%', color: '#47525E' }}>
        <h1> {day} {mes}</h1>
      </div>
      <Container>
        <span> {texto} </span>
      </Container>
    </div>

  );
}