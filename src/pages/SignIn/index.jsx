import { Container, Img } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';
import { Link } from 'react-router-dom';

export function SignIn(){
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

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <Link to="/ChangePass">
          Esqueceu sua senha?
        </Link>

        <Link to="/register">
          Criar conta
        </Link>


      </Form>



    </Container>
  )
}