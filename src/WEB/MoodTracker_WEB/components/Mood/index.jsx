import { Container } from "./styles";
import { FaRegFaceSadCry } from 'react-icons/fa6'
import { FaRegFaceSadTear} from 'react-icons/fa6'
import { FaRegFaceMeh } from 'react-icons/fa6'
import { FaRegFaceSmile } from 'react-icons/fa6'
import { FaRegFaceLaugh} from 'react-icons/fa6'

import { Happy, VeryHappy, VerySad, Sad, Ok } from "./styles";

export function Mood() {
  return (
    <Container> 
      
      <VerySad>
      <FaRegFaceSadCry /> 
      <span>Muito Triste</span>
      </VerySad>

      <Sad>
      <FaRegFaceSadTear /> 
      <span>Triste </span>
      </Sad>

      <Ok>
      <FaRegFaceMeh /> 
      <span>Neutro</span>
      </Ok>

      <Happy>
      <FaRegFaceSmile /> 
      <span>Alegre</span>
      </Happy>

      <VeryHappy>
      <FaRegFaceLaugh /> 
      <span>Feliz</span>
      </VeryHappy>

    </Container>



  );
}