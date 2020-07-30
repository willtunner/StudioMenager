import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/auth';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Backgroud, Container, Logo,
  AreaInput, Input, SubmitButton,
  SubmitText, Link, LinkText
} from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <LinearGradient  colors={['#E46765','#8C356A','#253066', '#151E3F', '#151E3F']} style={{flex:1}}>
    
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >
        <Logo source={require('../../assets/logo.png')} />

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
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Ainda não possui conta?</LinkText>
        </Link>
      </Container>
    
    </LinearGradient>
  );
}