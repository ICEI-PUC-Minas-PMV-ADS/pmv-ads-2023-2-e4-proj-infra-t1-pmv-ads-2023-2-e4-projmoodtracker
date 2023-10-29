import { Container, Img } from './styles';
import { MessageError } from '../../components/MessageError/MessageError'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignUp() {

  const navigate = useNavigate()
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJsZWFuZHJvIiwibmJmIjoxNjk4NTAzMzQwLCJleHAiOjE2OTg1MzIxNDAsImlhdCI6MTY5ODUwMzM0MH0.VYyjPOcotslCbIlZ4UQotWFC5v7E0au4KXwHdebubE0"; //Remover caso alterar na API a forma do CREATE sem necessidade de auth

  const [username, setUsername] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [senharepeat, setSenhaRepeat] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [email, setEmail] = useState('')
  const [msgError, setMsgError] = useState('')



  const formRegister = {
    username: username,
    nome: nome,
    nomeAlt: nome,
    email: email,
    dataNascimento: dataNascimento,
    senha: senha,

  }

  function handleRegisterUsername(e) {
    setUsername(e.target.value)
  }

  function handleRegisterData(e) {
    setDataNascimento(e.target.value)
  }

  function handleRegisterEmail(e) {
    setEmail(e.target.value)
  }

  function handleRegisterName(e) {
    setNome(e.target.value)
  }

  function handleRegisterSenha(e) {
    setSenha(e.target.value)
  }

  function handleRegisterRepeatSenha(e) {
    setSenhaRepeat(e.target.value)
  }

  useEffect(() => {


    const timer = setTimeout(() => {
      setMsgError('')
    }, 5000)

    //pra n ter b.o limpa
    return () => clearTimeout(timer)

  }, [msgError])


  function registerAuth(e) {
    e.preventDefault();
    //Senha com 1 caracter Maiusculo e acima de 6 caracteres

    console.log(formRegister);

    const regex = /^(?=.*[A-Z]).{6,}$/

    if (!nome || !senha || !senharepeat) {

      setMsgError('Nenhum dos campos podem ficar vazios!');
      toast.error('Nenhum dos campos podem ficar vazios!');
      return;

    }

    else if (!(senha === senharepeat && regex.test(senha))) {
      setMsgError('As senhas deverão coincidir possuindo ao menos uma letra maíuscula e 7 caracteres')
      toast.error('As senhas deverão coincidir possuindo ao menos uma letra maíuscula e 7 caracteres!');
      return;
    }



    axios.post(`https://localhost:7250/api/Usuarios/`, formRegister, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        // Acessando pelo /id temos o foco nos dados desse id
        console.log(response.data);
        navigate('/login', {
          state: {
            //usa o location para pegar a mensagem criar dps
            message: 'Registro realizado com sucesso!'
          }
        });
      })
      .catch(error => {
        toast.error('Houve um erro durante a solicitação com a API (jwtToken está sendo necessário para registro) consulte os desenvolvedores para mais informações!');
      });
  }



  return (

    <Container>

      <Img>
        <img src="src\images\fundologin.png"
          alt="Mood Tracker logo"
        />
      </Img>

      <Form>

        <img src="src\images\MoodTrackerLogoSignIn.png"
          alt="Mood Tracker logo"
        />

        <h2>Crie uma conta</h2>
        <MessageError key={msgError} msg={msgError} />

        <Input
          placeholder="Seu nome"
          type="text"
          handleOnChange={handleRegisterName}

        />

        <Input
          placeholder="Seu usuário"
          type="text"
          handleOnChange={handleRegisterUsername}

        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          handleOnChange={handleRegisterEmail}

        />

        <span>Data de nascimento:</span>
        <Input
          placeholder="Sua data de nascimento"
          type="date"
          handleOnChange={handleRegisterData}
        />

        <Input
          placeholder="Crie uma senha"
          type="password"
          icon={FiLock}
          handleOnChange={handleRegisterSenha}
        />

        <Input
          placeholder="Confirme sua senha"
          type="password"
          icon={FiLock}
          handleOnChange={handleRegisterRepeatSenha}
        />


        <Button title="Cadastrar" onClick={registerAuth} />

        <Link to="/">
          Voltar para o Login
        </Link>


      </Form>



    </Container>
  )
}