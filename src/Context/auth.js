import React, { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import {AsyncStorage} from 'react-native';

//o export é para pegar esse context de qualquer lugar
export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Parte para quando iniciar o app ele verifica se tem algo no asyncStorage para logar automatico
    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user'); 

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        
        loadStorage();
     }, []);

    //Função para logar o usuário
    async function signIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email,
                            senha: snapshot.val().senha
                        };

                        setUser(data);
                        storageUser(data);
                        console.log("Logou "+data);
                    })
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    //Cadastrar usuario
    async function signUp(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome,
                    email: email,
                    senha: password
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            senha: value.user.senha
                        };
                        setUser(data);
                        storageUser(data);
                    })
            })
            .catch((error) => {
                alert(error.code);
            });
    }

    //função para salvar usuario no asyncStorage do celular para logar automático
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //função para deslogar o usuario
    async function signOut(){
        await firebase.auth().signOut();//desloga do firebase
        await AsyncStorage.clear()//limpa o asyncStorage
        .then( () => {
            setUser(null);//depois que limpar seta o user para null
        })
    }

    return (
        //{signed: !!user, user } - converte em bollean
        //se tiver alguém logado user fica true
        <AuthContext.Provider value={{ signed: !!user, loading, user, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;