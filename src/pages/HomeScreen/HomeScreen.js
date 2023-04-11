import React from 'react';
import { SafeAreaView } from 'react-native'
import AddButton from '../../components/AddButton/AddButton';
import styles from './HomeScreen.style';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AddButton icon="plus" onPress={() => console.log('pressed')}/>
        </SafeAreaView>
    )
}

export default HomeScreen;