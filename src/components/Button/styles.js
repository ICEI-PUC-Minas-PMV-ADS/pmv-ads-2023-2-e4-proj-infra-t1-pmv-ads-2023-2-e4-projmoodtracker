import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  width: 150px;
  background-color: #5461D6;
  color: white;
  padding: 0 16px;
  margin-top: 16px;
  font-size: 16px;
  border-radius: 10px;  
  height: 48px;
  border: 0;
  
  .loading{
    animation: ${spin} 1s linear infinite;
  }

  &:disabled {
    opacity: 0.5;
  }
`;