import { styled } from "styled-components/native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const ContainerSplash = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const Logo = styled.Text`
  color: ${COLORS.grayLight};
  font-size: 60px;
  text-align: center;
  font-family: ${FONTS.bold};
  text-shadow: 1px 1px 10px white; 
`;

export const Logo2 = styled.Text`
  color: ${COLORS.grayLight};
  font-size: 55px;
  text-align: center;
  font-family: ${FONTS.regular};
  text-shadow: 2px 2px 10px white; 
`;

export const ContainerLogo = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;


export const ContainerLoading = styled.View`
    width: 100%;
    height: 0%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;