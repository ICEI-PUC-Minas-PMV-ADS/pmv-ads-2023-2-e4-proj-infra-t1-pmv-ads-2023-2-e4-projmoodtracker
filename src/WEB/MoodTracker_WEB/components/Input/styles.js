import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #EEEEEE;
  color: #47525E;
  margin-bottom: 10px;
  border-radius: 10px;

  svg {
      margin-left: 16px;
    }

  >input{
    height: 40px;
    width: 100%;
    padding: 12px;
    color: #47525E;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #47525E;
    }
  }

`;