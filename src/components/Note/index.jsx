import { Container } from "./styles";
import { BiSolidCommentEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


export function Note({ day, mes, texto, titulo, id }) {

  const navigate = useNavigate()

  function handleGoEdit(idUser) {
    navigate('/EditNote', {
      state: {
        //usa o location para pegar a mensagem criar dps
        id: idUser
      }
    });
  }


  return (
    <div style={{ display: 'flex', padding: 20, alignItems: 'center', justifyContent: 'flex-start' }}>
      <div style={{ width: '5%', color: '#47525E' }}>
        <h1> {day} {mes}</h1>
      </div>
      <Container>
        <span style={{ fontSize: 15, fontWeight: 'bold' }}>{titulo}</span>
        <span> {texto} </span>
      </Container>

      <button style={{ border: 0 }} onClick={() => handleGoEdit(id)}>
        <BiSolidCommentEdit />
      </button>
    </div>
  );
}