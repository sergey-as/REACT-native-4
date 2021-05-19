import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import {Camera} from 'expo-camera';
import MediaLibrary from "expo-media-library";

export const CameraComponent = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>no access to camera</Text>;
    }

    async function takePicture() {
        if (hasPermission) {
            const data = await camera.takePictureAsync(null);
            console.log({data});

            //await MediaLibrary.saveToLibraryAsync(data.uri);
            // todo send to server
        }
    }

    function flipBack() {
        setType(Camera.Constants.Type.back)
    }

    function flipFront() {
        setType(Camera.Constants.Type.front)
    }

    return <View style={styles.container}>
        <Text>CameraComponent page</Text>
        <View style={styles.cameraContainer}>
            <Camera style={styles.fixedRatio} type={type} ref={(r) => setCamera(r)}/>

            <Button title={'take picture'} onPress={takePicture}/>
            <Button title={'flip back'} onPress={flipBack}/>
            <Button title={'flip front'} onPress={flipFront}/>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'silver'},
    cameraContainer: {flex: 1},
    fixedRatio: {flex: 1, aspectRatio: 1},
});
