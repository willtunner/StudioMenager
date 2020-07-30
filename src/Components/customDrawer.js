import React, {useContext} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    Avatar, Title, Caption, Paragraph,
    Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper';
import { AuthContext } from '../Context/auth';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

export function DrawerContent(props) {
    const { user, signOut } = useContext(AuthContext);

    return (
        <LinearGradient colors={['#E46765', '#8C356A', '#253066', '#151E3F', '#151E3F']} style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={styles.backgroudTheme}>
                                <Avatar.Image
                                    source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }}
                                    size={90}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <Title style={styles.title}>William Pereira</Title>
                                    <Caption style={styles.caption}>@willtunner</Caption>
                                </View>
                            </View>

                            <View style={styles.backgroudButtons}>

                                <View style={{ marginTop: 25 }}>
                                    {/*Home */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="home-outline"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Home"

                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Home') }}
                                    />

                                    {/*Ensaios */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="calendar-multiselect"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Ensaios Agendados"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Ensaios Agendados') }}
                                    />

                                    {/*Relatórios */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="script-text"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Relatórios de ensaios"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Relatórios de ensaios') }}
                                    />

                                    {/*Biografia */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="account-badge-horizontal"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Biografia"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Biografia') }}
                                    />

                                    {/*Gravações */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="microphone-plus"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Gravações"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Gravações') }}
                                    />

                                    {/*Sobre o studio */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Image source={require('../../src/assets/logobtn.png')} height={30} width={30} />
                                        )}
                                        label="Sobre o Studio"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Sobre o Studio') }}
                                    />

                                    {/*Perfil */}
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="tune-vertical"
                                                color="#FD651E"
                                                size={size}
                                            />
                                        )}
                                        label="Perfil"
                                        onPress={() => { }}
                                        style={styles.button}
                                        labelStyle={{ color: "#FD651E" }}
                                        onPress={() => { props.navigation.navigate('Perfil') }}
                                    />
                                </View>

                                <TouchableOpacity onPress={ () => signOut() }>
                                    <View style={{
                                        flex: 1, backgroundColor: '#2C2929', height: 50,
                                        borderBottomRightRadius: 15, borderBottomLeftRadius: 15,
                                        marginTop: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                                    }}>
                                        <Icon2 name="power-off" color="#FD651E" size={25} style={{ marginLeft: 25 }} />
                                        <Text style={{ color: '#FFF', marginRight: 150, fontSize: 20 }}>Sair</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </DrawerContentScrollView>

                {/* <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section> */}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: "#FFF"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: "#FFF"
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    backgroudTheme: {
        backgroundColor: "#121212",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 5,
        borderTopLeftRadius: 15,
        marginBottom: 5,
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
    },
    backgroudButtons: {
        backgroundColor: "#121212",
        borderTopLeftRadius: 15,
        flex: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15

    },
    button: {
        backgroundColor: '#2C2929',
        borderRadius: 10,
        marginTop: 5,
        color: '#FFF'
    }
});