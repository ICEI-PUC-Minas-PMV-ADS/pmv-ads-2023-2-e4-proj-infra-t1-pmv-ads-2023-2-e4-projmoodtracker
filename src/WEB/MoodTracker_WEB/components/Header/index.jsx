import { RiShutDownLine } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container, Logo, Profile, Logout, Config, Options } from "./styles";
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate()

  const NomeUsuario = localStorage.getItem('NomeUsuario');
  const NomeCompleto = localStorage.getItem('NomeCompleto');

  function handleLogout() {
    // Limpar o localStorage
    localStorage.clear();
    
    navigate('/login', { state: { message: 'Obrigado pela compania, volte novamente para fazer mais registros! :)' } });
  }

  return (
    <Container>

      <Profile>
        <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo,</span>
          <strong>{NomeCompleto}</strong>
        </div>
      </Profile>

      <Logo>
        <img src="src\images\MoodTrackerLogo.png"
          alt="Mood Tracker logo"
        />
      </Logo>

      <Options>
        <Config>
          <BsFillGearFill />
          <span>Configurações</span>
        </Config >

        <Logout onClick={handleLogout}>
          <RiShutDownLine />
          <span>Sair</span>
        </Logout>
      </Options>


    </Container>
  );
}
