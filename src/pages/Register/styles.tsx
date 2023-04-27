import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url('https://wallpaperaccess.com/full/2029165.jpg');
  justify-content: center;

  background-color: white;
`; 


export const ContainerBoxRegister = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    background-color: #47cbffc8;
    align-items: center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  
    
`;

export const ContainerBoxImgRegister = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    border-top-right-radius: 20px;
    
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  background-color: #175168b3;
  
  opacity: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: #47cbff8b;

  & > form > div {
    display: flex;
    justify-content: space-between;

    & > div > label {
      margin-left: 8px;
    }
  }
`;

export const Form = styled.form`
  width: 400px;
  height: 40%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  opacity: 100%;
  
`;


export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: Verdana;
  margin-top: 20px;
  color: #000000;
`;




export const Button = styled.button`
  margin-top: 20px;

  color: #ffffff;
  background-color: #173768;

  padding: 6px;

  font-size: 24px;

  border: 0;

  &:hover {
    opacity: 0.7;
  }
`;

export const JaPossuiConta = styled.a`
  text-decoration: underline;
  color: #173768;
  font-family: Verdana;
  cursor: pointer;
  display: flex;
  
`;