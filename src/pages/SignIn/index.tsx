import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';


import imgLogin from '../../assets/imgLogin.svg';


import {
  Button,
  Container,
  ContainerImgLogin,
  ContainerLogin,
  Content,
  Form,
  Image,
  Title,
} from './styles';

import { Input } from '../../components/Input';


type SignIn = {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('username obrigatório'),
  password: yup.string().required('password obrigatório'),
}).required();

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignIn>({
    resolver: yupResolver(schema)
  });



  const handleSignIn = (data: SignIn) => {
    setTimeout(() => {
      console.log(data);

    }, 0);
  }

  const navigate = useNavigate();

  return (
    <Container>
      <ContainerImgLogin>
        <Image>
          <img src={imgLogin} alt='Logo' width="300px" />
        </Image>
      </ContainerImgLogin>
      <ContainerLogin>
        <Content>
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <Title>LOGIN</Title>

            <Input
              label='Usuário'
              placeholder='Digite seu usuário'
              error={errors.username as FieldError}
              {...register('username')}
            />

            <Input
              type='password'
              label='Senha'
              placeholder='Digite sua senha'
              error={errors.password as FieldError}
              {...register('password')}
            />

            <div>
              <div>
                {/* <Input
                id='rememberme'
                type="checkbox"
                {...register('rememberme')}
              />
              <Label htmlFor='rememberme'>Lembrar me</Label> */}
              </div>

              <a href='/'>Esqueceu sua senha?</a>
            </div>

            <Button type='submit'>Entrar</Button>

            <NavLink to='/register'>Cadastrar-se?</NavLink>

          </Form>
        </Content>
      </ContainerLogin>
    </Container>
  )
}
