import { Container, Menu, MonthNote, Content, MonthRegister } from './styles';
import { Header } from '../../components/Header';
import { PiPencilLineDuotone } from 'react-icons/pi';
import { FaFilter } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { CreateText, Filter, Search } from './styles';
import { VeryHappy } from '../../components/Mood/styles';
import { FaRegFaceLaugh} from 'react-icons/fa6';
import { Note } from '../../components/Note';


export function Home() {
  return (
    
    
    <Container>
      
      <Header />           
              
          <Menu>
            <CreateText to="/CreateNote">
              <PiPencilLineDuotone />
              <span>CRIAR TEXTO</span>
            </CreateText>

            <Filter>
              <FaFilter />
              <span>FILTRAR</span>
            </Filter>

            <Search>
              <BiSearch />
              <span>BUSCAR</span>
            </Search>

            <MonthRegister>
                <span>Humor do mês:</span>
                <VeryHappy>
                <FaRegFaceLaugh /> 
                <span>Feliz</span>
                </VeryHappy>

                <span>Registros no mês:</span>
                <h1> 01</h1>
            </MonthRegister>

          </Menu>
    

          <MonthNote>
                <strong> Nota do Mês: </strong>
                <span> It is a long established fact that a reader will be distracted </span>
          </MonthNote>

          <Content>
            
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />    

          </Content>

    </Container>
  )

}