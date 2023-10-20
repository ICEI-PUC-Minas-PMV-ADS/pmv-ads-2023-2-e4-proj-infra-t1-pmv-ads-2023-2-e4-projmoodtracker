import { Container, Img } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';
import { Link } from 'react-router-dom';

export function ChangePass(){
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
              
        <h2>Redefinir Senha</h2>


        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />      

        <Button title="Redefinir Senha" />

        <Link to="/">
          Voltar para o Login
        </Link>


      </Form>



    </Container>
  )
}