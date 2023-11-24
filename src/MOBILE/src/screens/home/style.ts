import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';


export const ContainerHome = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TextName = styled.Text`
  color: ${COLORS.white};
  font-size: 20px;
  font-family: ${FONTS.extra_light};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${COLORS.white};
  font-size: 20px;
  font-family: ${FONTS.bold};
  justify-content: center;
  align-items: center;
`;

export const TextPoints = styled.Text`
  color: ${COLORS.white};
  font-size: 20px;
  font-family: ${FONTS.regular};
  justify-content: center;
  align-items: center;
`;

export const ViewColumn = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ViewRow = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding-bottom: 20px;
`;

export const ProfileImageContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 100px;
  width: 130px;
  height: 130px;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Adicionamos o overflow hidden para que a imagem seja cortada dentro do círculo */
`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;


export const ButtonJogar = styled.TouchableOpacity`
    background-color: ${COLORS.secundary};
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 15%;
    gap: 15px;
`;


export const ContainerOptions = styled.View`
    margin-top: 40px;
    justify-content: flex-start;
    align-items: center;
    padding: 30px;
    gap: 30px;
`;
