import React,{useContext} from 'react';
import { View,Text, Button } from 'react-native';
import { AuthContext } from '../../Context/auth';

export default function Perfil() {
  const { user, signOut } = useContext(AuthContext);
 return (
   <View>
       <Text>Perfil</Text>

       <View>
       <Text>Home</Text>
       <Text>{ user && user.nome }</Text>
       <Text>{ user && user.email }</Text>
       <Button
       title="Sair da conta"
       onPress={ () => signOut() }
       />
   </View>
   </View>
  );
}