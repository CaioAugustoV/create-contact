import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerCard = styled.div`
  background: ${props => props.dark ? '#080808' : 'transparent'};
  width: calc(100% / 3);
  height: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  h1{
    color: #fff;
    margin: 0;
  }
  p{
    color: #fff;
    margin: 0;
  }
`;

export const ContainerInputs = styled.div`
  width: calc(100vw / 3 - 40px);
  margin-top: 40px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0;
  label{
    color: #fff;
    font-size: 18px;
  }
  input{
    width: calc(100% - 20px);
    padding: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid #71f497;
    border-radius: 10px;
    padding: 8px 10px;
    color: #fff;
    font-size: 16px;
    transition: .5s ease;
    :focus{
      outline: none;
      border-bottom-color: #fff;
    }
  }
`;

export const Button = styled.div`
  border: 2px solid #71f497;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  align-self: flex-end;
  cursor: pointer;
  transition: .5s ease;
  :hover{
    border-color: #fff;
    color: #000;
    background: #71f497;
  }
`;

export const ContainerContacts = styled.div`
  width: 100%;
`;

export const ContactsList = styled.div`
  width: 100%;
  margin-top: 45px; 
  max-height: 83vh;
  overflow:auto;
`;

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 8px 10px;
  background: ${props => props.active ? '#71f4973d' : 'transparent'};
  transition: .5s ease;
  :hover{
    background: #71f4973d;
  }
`;

export const IconName = styled.div`
  background: #000;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: #71f497;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #71f497;
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2{
    margin: 0;
    color: #fff;
  }
  div{
    margin-left: 5px;
    svg{
      fill: #fff;
      width: 25px;
      height: 25px;
      margin: 0 3px;
    }
  }
`;

export const DetalhesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  svg{
    margin: 0 5px;
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`;

export const DetalhesContent = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  label{
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
  }
  input{
    width: calc(100% - 16px);
    margin: 5px 0;
    background: transparent;
    color: #71f497;
    font-size: 16px;
    padding: 8px;
    border-radius: 10px;
  }
  button{
    border: 2px solid #71f497;
    border-radius: 10px;
    padding: 10px 20px;
    color: #fff;
    align-self: flex-end;
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    margin: 20px 0;
    transition: .5s ease;
    :hover{
      border-color: #fff;
      color: #000;
      background: #71f497;
    }
  }
`;