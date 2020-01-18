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