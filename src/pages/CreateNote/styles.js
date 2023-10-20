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