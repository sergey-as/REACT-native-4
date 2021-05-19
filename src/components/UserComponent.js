import React from 'react';
import {View, Text, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

export const UserComponent = (props) => {
    const {item, nav} = props;

    return <View style={[styles.box]}>
        <Text>name: {item.name}</Text>
        <Text>email: {item.email}</Text>
        <Button title={'user details'} onPress={() => {
            nav.navigate('User Details', {data: item})
        }}/>
    </View>;
};

const styles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: 'silver',
        marginBottom: 3
    }
});
