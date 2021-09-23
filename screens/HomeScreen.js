import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.text}>Я есть главный экран</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})
