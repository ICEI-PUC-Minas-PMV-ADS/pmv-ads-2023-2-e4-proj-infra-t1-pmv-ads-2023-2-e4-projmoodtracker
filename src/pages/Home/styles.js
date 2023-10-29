import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 150px 50px auto;
  grid-template-areas:
  "header header "
  "menu monthnote"
  "menu content";
`;

export const Menu = styled.ul `
  grid-area: menu;
  align-items: center;
  display: grid;
  background: rgba(42, 41, 129, 0.4);
`;

export const MonthNote = styled.div `
  grid-area: monthnote;
  background: #CFCFCF;
  display: flex;
  justify-content: left;
  align-items: center;

  Strong, span {
    color: #47525E;
    margin-left: 25px;  
  }

`;

export const Content = styled.div `
  grid-area: content;
  padding: 0 20px;
  background: #EEEEEE;
  overflow-y: auto;
  display: inline;
  justify-content: left; 

  section{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background-color: #EEEEEE;
  }

  section div span svg{
    color: black;
    cursor: pointer
    
  }

  section div span svg:hover{
    color: #AAAAAA;
    cursor: pointer
  }

  section span {
    padding: 10px;
  }

  section span svg:hover{
    color: #BA0021;
    cursor:pointer
  }


  svg {
    display: block;
    margin: 0 auto;    
    font-size: 20px;
    color: black;
  }




`;

export const CreateText = styled(Link)`
  border: none;
  background: none;
  display: block;
  margin: 0 auto;  

  span {
      font-size: 14px;
      color: white;
      margin-left: 5px;
      text-align: center;
    }

  svg {
    display: block;
    margin: 0 auto;    
    font-size: 50px;
    color: white;
  }
`;

export const Filter = styled.button`
  border: none;
  background: none;
  display: block;
  margin: 0 auto;  

  span {
    font-size: 14px;
    color: white;
    margin-left: 5px;
    text-align: center;
  }

  svg {
    display: block;
    margin: 0 auto;    
    font-size: 50px;
    color: white;
  }
`;

export const Search = styled.button`
  border: none;
  background: none;
  display: block;
  margin: 0 auto;  

  span {
    font-size: 14px;
    color: white;
    margin-left: 5px;
    text-align: center;
  }

  svg {
    display: block;
    margin: 0 auto;    
    font-size: 50px;
    color: white;
  }


`;


export const MonthRegister = styled.div`
  border: none;
  display: grid;

  span {
    font-size: 14px;
    color: white;
    text-align: center;
    }

  h1 {
    font-size: 30px;
    color: white;
    text-align: center;
  }
    
    
`;