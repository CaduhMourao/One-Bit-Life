import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from "../../Components/Home/StatusBar";
import CreateHabit from "../../Components/Home/CreateHabit";

export default function Home() {
    const navigation = useNavigation();
    const [mindHabit, setMidHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation() {
        navigation.navigate('AppExplanation')
    }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.dailyChecks}>
                            ❤️ 20 dias - ✔️ 80 checks
                        </Text>
                        
                        <LifeStatus />
                        <StatusBar />
                        <CreateHabit habitArea="Mente" borderColor={"#90B7F3"}/>
                    </View>

                    <Text
                        style={styles.explanationText}
                        onPress={() => {
                            handleNavExplanation()
                        }}>
                            Ver explicação novamente
                    </Text>

                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },
})