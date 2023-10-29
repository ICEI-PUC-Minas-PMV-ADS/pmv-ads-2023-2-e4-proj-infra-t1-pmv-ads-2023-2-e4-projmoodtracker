import { Container, Content, TextAreaMood } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Mood } from '../../components/Mood';
import { Input } from '../../components/Input';
import { Title } from './styles';
import { useNavigate } from 'react-router-dom'
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

export function CreateNote() {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [humor, setHumor] = useState(0);
  const auth = localStorage.getItem('token');

  const [regFeliz, setRegFeliz] = useState('');
  const [regTriste, setRegTriste] = useState('');

  const [msgError, setMsgError] = useState('');
  const usuarioLogado = localStorage.getItem('NomeUsuario');
  const dataHoje = new Date();

  const formData = {
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
    console.log(formData);
  }, [formData])


  function enviarRegistro(e) {
    e.preventDefault();


    if (titulo == '') {
      setMsgError('Por favor, insira um título para o seu registro.')
      return;
    }

    if (texto == '') {
      setMsgError('Por favor, descreva como se sente.')
      return;
    }

    if (humor == 0) {
      setMsgError('Por favor, selecione o seu humor hoje.')
      return;
    }


    axios.post(`https://localhost:7250/api/Registros`, formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth}`
      }
    })
      .then(response => {
        navigate('/home', {
          state: {
            message: 'Seu registro foi realizado com sucesso!'
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
            Faça o seu registro diário
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

        <Button title="Apagar registro" onClick={handleExcluirNota} style={{ backgroundColor: 'brown' }} />

      </Content>

    </Container>
  )
}