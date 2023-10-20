import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: stretch;
   background-color: #EEEEEE;
   justify-content: space-between;

   h2 {
    font-size: 18px;
    color: white;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
   }
`;

export const Form = styled.form `
  width: 400px;
  padding: 0 20px;
  flex-direction: column;
  display: flex;  
  align-items: center;
  text-align: center;
  background-color: rgba(75, 87, 161, 0.5);
  border-radius: 25px;

  img {
    width: 200px;   
   
  }

  a {
  color: white;
  font-size: 16px;
  margin-top: 16px;
  }
`;

export const Img = styled.div `
  display: flex;
  align-items: center;

  img {
    width: 750px;   
  }

`;
