import React, { useContext } from 'react';
import { AuthContext } from '../Context/auth';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
    //signed foi criado no auth do context
    const { signed, loading } = useContext(AuthContext);

    //antes de mandar para rota coloca esse load quando logar
    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        )
    }
    
    return(
        //Renderização condicional: se signed for true mostra <AppRoutes/> se não <AuthRoutes/>
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;


