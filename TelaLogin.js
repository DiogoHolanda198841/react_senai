import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native-paper";
import TelaModulos from "./TelaModulos";
export default function TelaLogin({navigation}){
    var usuarioDigitado="";
    var senhaDigitada="";
    function fazerLogin(){
        if(usuarioDigitado == "admin" && senhaDigitada == "1234"){
            navigation.navigate("Tela Modulos");

        }else{
            Alert.alert("Aviso", "Usuário e/ou senha incorreta")
        }
    }
    return(
        <View style={estilos.container}>
            <ImageBackground
                source={require('./assets/imagem2.jpg')}
                style={estilos.cxImagem2}
                imageStyle={estilos.Imagem2}>
            </ImageBackground>

            <View style={estilos.cxLogin}>
                <TextInput
                onChangeText={(texto)=>{usuarioDigitado=texto}}
                mode="outlined"
                style={{width: 300, marginBottom: 20 }}
                label="usuario"/>
                
                <TextInput
                onChangeText={(texto)=>{senhaDigitada=texto}}
                mode="outlined"
                style={{width: 300, marginBottom: 50}}
                label="senha"/>
                    <TouchableOpacity style={estilos.botao}
                onPress={()=>{fazerLogin()}}>
                    <Text style={{
                        color: "white",
                        fontSize: 20
                    }}>Entrar</Text>
                </TouchableOpacity>
            </View>
            
            
            
            <StatusBar style="auto"/>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        
    },
    cxImagem2:{
        width: "100%",
        height: "40%"
    },
    Imagem2:{
        width: "100%",
        height: "100%,",
    },
    cxLogin:{
        backgroundColor: "white",
        width: "100%",
        flex: 1,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        marginTop: -50,
        justifyContent: "center",
        alignItems: "center"
    },
    botao:{
        backgroundColor: "#553893",
        width: "300",
        borderRadius: 20,
        padding: 20,
        alignItems: "center"
    }
});