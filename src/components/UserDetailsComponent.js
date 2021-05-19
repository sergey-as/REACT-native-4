import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';

export const UserDetailsComponent = ({route, navigation}) => {
    const {params: {data}} = route;
    console.log(data);
    useEffect(() => {
        navigation.setOptions({title: data.name})
    }, []);

    return <View>
        <Text>
            {data.name} - {data.email}
        </Text>
    </View>;
};

const styles = StyleSheet.create({});
