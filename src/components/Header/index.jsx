import { RiShutDownLine } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { Profiler } from "react";
import { Container, Logo, Profile, Logout, Config, Options } from "./styles";

export function Header() {
  return (
    <Container>
      
      <Profile>
        <img src="https://github.com/tiagodlobo.png"
        alt="Foto do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Nome do Usuário</strong>
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

        <Logout>
          <RiShutDownLine />
          <span>Sair</span>
        </Logout>
      </Options>


    </Container>
  );
}
