import { Container, Img } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';
import { Link } from 'react-router-dom';

export function SignUp(){
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

        <Input
          placeholder="Seu nome"
          type="text"
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />      

        <Input
          placeholder="Sua data de nascimento"
          type="date"
        />

        <Input
          placeholder="Crie uma senha"
          type="password"
          icon={FiLock}
        /> 

        <Input
          placeholder="Confirme sua senha"
          type="password"
          icon={FiLock}
        />       


        <Button title="Cadastrar" />

        <Link to="/">
          Voltar para o Login
        </Link>


      </Form>



    </Container>
  )
}