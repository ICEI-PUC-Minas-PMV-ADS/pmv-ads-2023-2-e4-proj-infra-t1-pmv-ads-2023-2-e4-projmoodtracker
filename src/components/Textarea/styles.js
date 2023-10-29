import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  display: flex;
  background-color: #EEEEEE;
  color: #47525E;  
  border: none;
  resize: none;
  margin-bottom: 8px;
  border-radius: 10px;
  height: 150px; 
  padding: 12px;

  &::placeholder {
    color: #47525E;
  }

`;