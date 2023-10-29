import { Container, Img } from './styles';
import { MessageError } from '../../components/MessageError/MessageError'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//FAZER VARIAVEL GLOBAL COM O TOKEN DO USUARIO

export function SignIn() {
  const location = useLocation();
  const mensagemTela = location.state && location.state.message;


  const navigate = useNavigate();

  const [userlogin, setUserLogin] = useState('');
  const [usersenha, setUserSenha] = useState('');
  const [msgError, setMsgError] = useState('');
  const [loading, setLoading] = useState(false);

  const user = {
    Usuario: userlogin,
    senha: usersenha
  }


  function handleUserLogin(e) {
    setUserLogin(e.target.value)
  }

  function handleUserSenha(e) {
    setUserSenha(e.target.value)
  }

  useEffect(() => {
    if (!!mensagemTela) {
      toast.success(mensagemTela);
    }
  }, [mensagemTela]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgError('')
    }, 5000)

    return () => clearTimeout(timer)

  }, [msgError])

  async function authLogin(e) {
    e.preventDefault();
    setLoading(true);
    console.log(user);

    if (userlogin === '' || usersenha === '') {
      setMsgError('Os campos não podem estar vazios!')
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://localhost:7250/api/Usuarios/authenticate', user, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setMsgError(null);
      if (!!response.data && response.data !== "") {
        console.log(response.data);
        localStorage.setItem('MensagemLogin', 'Login realizado com sucesso!');
        localStorage.setItem('NomeUsuario', userlogin);
        localStorage.setItem('token', response.data.jtwToken);

        toast.success('Você logou com sucesso!');

        navigate('/home');
      } else {
        setMsgError("Usuário ou senha inválidos!");
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        setMsgError("Usuário ou senha inválidos!");
        toast.error('Usuário ou senha inválidos!'); // Exibir mensagem de erro
      } else {
        setMsgError("Ocorreu algum erro com a API!");
        toast.error('Ocorreu algum erro com a API!'); // Exibir mensagem de erro
      }
    } finally {
      setLoading(false); //parar o loading
    }
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

        <h2>Insira suas credenciais de acesso</h2>
        <MessageError key={msgError} msg={msgError} />

        <Input
          placeholder="Usuário"
          type="text"
          icon={FiMail}
          handleOnChange={handleUserLogin}
        />

        <Input
          placeholder="Senha"
          type="password"
          handleOnChange={handleUserSenha}
          icon={FiLock}

        />

        <Button title="Entrar" loading={loading} onClick={authLogin} />


        <Link to="/ChangePass">
          Esqueceu sua senha?
        </Link>

        <Link to='/register'>
          Criar conta
        </Link>


      </Form>



    </Container>
  )
}