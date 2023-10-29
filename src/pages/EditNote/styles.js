import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
  "header"
  "content"; 
`;

export const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextAreaMood = styled.textarea`
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

export const Title = styled.ul`
  display: flex;
  width: 100%;  
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 10px;
  margin-top: 10px;
  color: white;

  a {
    color: white;
  }
 

`;