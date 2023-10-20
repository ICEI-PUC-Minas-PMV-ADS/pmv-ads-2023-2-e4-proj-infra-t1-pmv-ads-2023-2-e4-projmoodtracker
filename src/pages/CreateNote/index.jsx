import { Container, Content } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Mood } from '../../components/Mood';
import { Input } from '../../components/Input';
import { Title } from './styles';
import { Textarea } from '../../components/Textarea';
import { Link } from 'react-router-dom';

export function CreateNote(){

  return (
    
    
    <Container>

      <Header />      

 
        <Content>      

        <Title>
          <h1>
            Criar Nota
          </h1>
          
          <Link to="/">
            Voltar
          </Link>

        </Title>



          <Input
          placeholder="Título"
          type="text"
          />     
         
         <Textarea
          type="text"
          />    

          <Section title="Humor da nota">
            <Mood/>      
          </Section>

          <ButtonText title="Excluir nota" />          

          <Button title="Salvar" />

        </Content>
  
    </Container>
  )
}