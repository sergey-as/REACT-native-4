import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CameraComponent, PostDrawer, UsersComponent} from "./src/components";

// let StackNavigator = createStackNavigator();
let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
                <BottomTabNavigator.Screen name={'Users'} component={UsersComponent}/>
                <BottomTabNavigator.Screen name={'Posts'} component={PostDrawer}/>
                <BottomTabNavigator.Screen name={'Camera'} component={CameraComponent} options={{unmountOnBlur: true}}/>
            </BottomTabNavigator.Navigator>

        </NavigationContainer>

    )
        ;
}

const styles = StyleSheet.create({});
