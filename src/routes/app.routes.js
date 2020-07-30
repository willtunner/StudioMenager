import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../Components/customDrawer';

import Home from '../pages/Home';
import EnsaiosAgendados from '../pages/EnsaiosAgendados';
import Relatorios from '../pages/Relatorios';
import Biografia from '../pages/Biografia';
import Gravacoes from '../pages/Gravacoes';
import SobreStudio from '../pages/SobreStudio';
import Perfil from '../pages/Perfil';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: '#C4C4C4'
            }}
            drawerContentOptions={{
                labelStyle:{
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#2D2A2A',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle:{
                    marginVertical: 5,
                }
            }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Ensaios Agendados" component={EnsaiosAgendados}/>
            <AppDrawer.Screen name="Relatórios de ensaios" component={Relatorios}/>
            <AppDrawer.Screen name="Biografia" component={Biografia}/>
            <AppDrawer.Screen name="Gravações" component={Gravacoes}/>
            <AppDrawer.Screen name="Sobre o Studio" component={SobreStudio}/>
            <AppDrawer.Screen name="Perfil" component={Perfil}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;
//FEITO PELO TUTORIAL