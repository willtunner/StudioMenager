import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { AuthContext } from '../../Context/auth';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Backgroud, Container,
  AreaInput, Input, SubmitButton,
  SubmitText
} from '../SignIn/styles';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useContext(AuthContext);


  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <LinearGradient colors={['#E46765', '#8C356A', '#253066', '#151E3F', '#151E3F']} style={{ flex: 1 }}>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >

        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

      </Container>
    </LinearGradient>
  );
}