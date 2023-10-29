import { Container, Content, TextAreaMood } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Title } from './styles';
import { useNavigate, useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Happy, VeryHappy, VerySad, Sad, Ok } from '../../components/Mood/styles';
import { FaRegFaceSadCry } from 'react-icons/fa6'
import { FaRegFaceSadTear } from 'react-icons/fa6'
import { FaRegFaceMeh } from 'react-icons/fa6'
import { FaRegFaceSmile } from 'react-icons/fa6'
import { FaRegFaceLaugh } from 'react-icons/fa6'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditNote() {
  const navigate = useNavigate()
  const location = useLocation();
  const idUserReg = location.state && location.state.id;
  console.log(idUserReg);

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [humor, setHumor] = useState(0);
  const [regFeliz, setRegFeliz] = useState('');
  const [regTriste, setRegTriste] = useState('');
  const [data, setData] = useState('');
  const auth = localStorage.getItem('token');
  const [msgError, setMsgError] = useState('');
  const usuarioLogado = localStorage.getItem('NomeUsuario');
  const dataHoje = new Date();

  const formData = {
    id: idUserReg,
    titulo: titulo,
    data: dataHoje,
    texto: texto,
    humor: humor,
    regFeliz: regFeliz,
    regTriste: regTriste,
    usuario: usuarioLogado,
  };

  const handleExcluirNota = () => {
    setTitulo('');
    setTexto('');
    setHumor(0);
    setRegFeliz('');
    setRegTriste('');
  };

  function enumHumor(numberHumor) {
    if (numberHumor == 0) {
      return "Seu humor: "
    }

    if (numberHumor == 5) {
      return "Estou muito triste! 😪"
    }

    if (numberHumor == 4) {
      return "Me sinto triste! 😕"
    }

    if (numberHumor == 3) {
      return "Me sinto neutro! 😐"
    }

    if (numberHumor == 2) {
      return "Me sinto feliz! 😀"
    }

    if (numberHumor == 1) {
      return "Me sinto muito feliz!! 😁🥳"
    }


  };

  function handleTitulo(e) {
    setTitulo(e.target.value)
  };

  function handleTexto(e) {
    setTexto(e.target.value)
  };

  function handleHumor(value) {
    setHumor(value);
  };

  function handleRegFeliz(e) {
    setRegFeliz(e.target.value)
  };

  function handleRegTriste(e) {
    setRegTriste(e.target.value)
  };


  useEffect(() => {
    getReg();
  }, [])


  function getReg() {

    axios.get(`https://localhost:7250/api/Registros/${idUserReg}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      }
    })
      .then(response => {
        setHumor(response.data.humor);
        setRegFeliz(response.data.regFeliz);
        setRegTriste(response.data.regTriste);
        setTexto(response.data.texto);
        setTitulo(response.data.titulo);
      })
      .catch(error => {
        console.error('Houve um erro durante a solicitação:', error.response.data);
        setMsgError(error.response.data);
        toast.error(error.response.data);
      });
  }


  function enviarRegistro(e) {

    axios.put(`https://localhost:7250/api/Registros/${idUserReg}`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      }
    })
      .then(response => {
        
        navigate('/home', {
          state: {
            message: 'Seu registro foi editado com sucesso!'
          }
        });
      })
      .catch(error => {
        console.error('Houve um erro durante a solicitação:', error.response.data);
        setMsgError(error.response.data);
        toast.error(error.response.data);
      });
  }

  return (
    <Container>
      <Header />
      <Content>

        <Title>
          <h1>
            Edite o seu registro
          </h1>

          <Link to="/home">
            Voltar
          </Link>

        </Title>

        <Input
          placeholder="Título"
          type="text"
          name="title"
          handleOnChange={handleTitulo}
          value={titulo}
        />

        <TextAreaMood
          value={texto}
          onChange={handleTexto}
        />

        <div style={{ display: 'flex', width: '100%', gap: 30 }}>
          <Input
            placeholder="O que me deixou feliz? :)"
            type="text"
            name="title"
            value={regFeliz}
            handleOnChange={handleRegFeliz}
          />

          <Input
            placeholder="O que me deixou triste? :("
            type="text"
            name="title"
            value={regTriste}
            handleOnChange={handleRegTriste}
          />
        </div>

        <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
          <Section title={enumHumor(humor)}>
            <VerySad onClick={() => handleHumor(5)}>
              <FaRegFaceSadCry />
              <span>Muito Triste</span>
            </VerySad>

            <Sad onClick={() => handleHumor(4)}>
              <FaRegFaceSadTear />
              <span>Triste</span>
            </Sad>

            <Ok onClick={() => handleHumor(3)}>
              <FaRegFaceMeh />
              <span>Neutro</span>
            </Ok>

            <Happy onClick={() => handleHumor(2)}>
              <FaRegFaceSmile />
              <span>Alegre</span>
            </Happy>

            <VeryHappy onClick={() => handleHumor(1)}>
              <FaRegFaceLaugh />
              <span>Feliz</span>
            </VeryHappy>
          </Section>
        </div>

        <Button title="Salvar" onClick={enviarRegistro} />

        <Button title="Limpar registro" onClick={handleExcluirNota} style={{ backgroundColor: 'brown' }} />

      </Content>

    </Container>
  )
}