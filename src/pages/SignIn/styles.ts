import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://i.pinimg.com/originals/ec/b9/2d/ecb92d18c7855c986a5571c1b6f7cad2.jpg');

  background-color: #47cbffa6;
`;

export const ContainerLogin = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  background-color: #47cbffc8;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

`;

export const ContainerImgLogin = styled.div`
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    border-top-right-radius: 20px;

`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  display: flex;
  justify-content: center;
  background-color: #175168b3;

  opacity: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

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
  color: black;
`;

export const Button = styled.button`
  margin-top: 12px;

  color: #FFF;
  background-color: #175168;

  padding: 6px;

  font-size: 24px;

  border: 0;

  &:hover {
    opacity: 0.7;
  }
`;
