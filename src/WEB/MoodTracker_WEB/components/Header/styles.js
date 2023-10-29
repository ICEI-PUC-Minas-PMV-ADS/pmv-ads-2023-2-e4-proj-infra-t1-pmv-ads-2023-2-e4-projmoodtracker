import styled from 'styled-components';

export const Container = styled.header `
  grid-area: header;

  height: 150px;
  width: 100%;
  border-bottom-width: 0px;
  border-bottom-style: solid;
  background-color: rgba(75, 87, 161, 0.5);

  display: flex;
  justify-content: space-between;

  padding: 0 80px;


`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
    }

    strong {
      font-size: 14px;
    }

  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 400px;
    align-items: center;
   
  }
`;

export const Options = styled.div`
  display: flex;
  margin-left: 20px;  

`;

export const Config = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  

  span {
      font-size: 14px;
      color: white;
      margin-left: 5px;
    }

  >svg {
    font-size: 20px;
    color: white;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  margin-left: 20px;

  span {
      font-size: 14px;
      color: white;
      margin-left: 5px;
    }

  >svg {    
    font-size: 20px;
    color: white;
  }
`;