import React from "react"
import { Image, View, TouchableOpacity, Text, StyleSheet, ScrollView} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NoInternet() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 10}}>
                <View style={{width: "auto"}}>
                    <Image style={{resizeMode: "contain"}} source={require("../../resources/no_internet.png")} />
                </View>
                <Text style={{fontWeight: "medium", fontSize: 20}}>Everything will get back to normal when you have access to the internet</Text>                             
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
})