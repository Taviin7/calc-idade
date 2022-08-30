import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function Home () {
    
    let [anonasc, setAnonasc] = useState();
    let [anoatual, setAnoatual] = useState();
    let[result, setResult] = useState();

    function Converter(){

        let resultado = (result) = parseFloat(anoatual) - parseFloat(anonasc);
        setResult(resultado);

        alert("Sua idade é: " +result);
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Descobrir idade</Text>

            <TextInput onChangeText={setAnoatual} style={styles.input} placeholder="Ano atual"></TextInput>
            <TextInput onChangeText={setAnonasc} style={styles.input} placeholder="Ano de nascimento"></TextInput>

            <TouchableOpacity  onPress={Converter} style={styles.button}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CDCDC1',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        margin: 30
    },

    input:{
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center'
    },
    
    button:{
        backgroundColor: '#FF3030',
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },

    buttonText:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold'
    }
});