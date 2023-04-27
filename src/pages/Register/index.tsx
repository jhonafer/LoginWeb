import React from 'react';

import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import imgLogin from '../../assets/imgLogin.svg';

import {
  Button,
  Container,
  ContainerBoxImgRegister,
  ContainerBoxRegister,
  Content,
  Form,
  Image,
  JaPossuiConta,
  Title,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';

type Register = {
  username: string;
  password: string;
  confirmpassword: string;
}

const schema = yup.object().shape({
  username: yup.string().required('O username é obrigatório'),
  password: yup.string().required('O password é obrigatório'),
  confirmpassword: yup.string().oneOf([yup.ref('password')], 'As senhas não são iguais!')
}).required("As senhas devem ser iguais");

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Register>({
    resolver: yupResolver(schema)
  });

  const handleRegister = (data: Register) => {
    setTimeout(() => {
      console.log(data);
    }, 0);
    console.log(data);
  }

  const navigate = useNavigate();


  return (
    <Container>
      <ContainerBoxImgRegister>
        <Image>
          <img src={imgLogin} alt='Logo' width="300px" />
        </Image>
      </ContainerBoxImgRegister >
      <ContainerBoxRegister>
        <Content>
          <Form onSubmit={handleSubmit(handleRegister)}>
            <Title>REGISTER</Title>

            <Input
              label='Full   Name'
              placeholder='Digite seu usuário'
              error={errors.username as FieldError}
              {...register('username')}
            />

            <Input
              type='password'
              label='Password'
              placeholder='Digite sua senha'
              error={errors.password as FieldError}
              {...register('password')}
            />

            <Input
              type='password'
              label='Confirm Password'
              placeholder='Confirme sua senha'
              error={errors.confirmpassword as FieldError}
              {...register('confirmpassword')}
            />


            <JaPossuiConta onClick={() => navigate("/")}>Já possui conta?</JaPossuiConta>

            <Button type='submit'>Cadastrar</Button>


          </Form>
        </Content>
      </ContainerBoxRegister>
    </Container>
  )
}
