import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {getUsers} from "../api/API";
import {UserComponent} from "./UserComponent";

export const UsersComponent = (props) => {
    const {navigation} = props;

    let [users, setUsers] = useState([]);

    // async function fetchData() {
    //     let users = await getUsers();
    //     setUsers([...users]);
    // }

    useEffect(() => {
        async function fetchData() {
            let users = await getUsers();
            setUsers([...users]);
        }

        fetchData();

        return () => {
            console.log('hello');
        };
    }, []);

    return <View>
        <FlatList
            data={users}
            renderItem={
                ({item}) => {
                    return <UserComponent nav={navigation} item={item}/>
                }}
            keyExtractor={item => '' + item.id}
            // horizontal={true}
        />

    </View>;
};

const styles = StyleSheet.create({});
