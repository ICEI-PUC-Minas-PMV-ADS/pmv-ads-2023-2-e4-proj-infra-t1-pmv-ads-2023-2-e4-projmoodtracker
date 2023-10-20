import styled from "styled-components";

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
  
  &:disabled {
    opacity: 0.5;
  }
`;