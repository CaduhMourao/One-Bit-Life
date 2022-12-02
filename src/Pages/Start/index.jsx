import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import DefaultButton from '../../Components/Common/DefaultButton';
import { useNavigation } from '@react-navigation/native';

import LifeStatus from '../../Components/Common/LifeStatus';

export default function Start() {
    const navigation = useNavigation()

    const handleNavAppExplanation = () => {
        navigation.navigate('AppExplanation')
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image
                        source={require("../../assets/icons/logo3.png")} style={styles.logo} />
                    
                    <LifeStatus />

                    <Text style={styles.description}>
                        Vamos transformar sua vida {"\n"} em jogo . buscando sempre {"\n"} o melhor nível.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlerPress={handleNavAppExplanation}
                        width={250}
                        height={50}
                        />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})