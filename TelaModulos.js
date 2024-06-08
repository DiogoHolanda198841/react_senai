import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView  } from "react-native";
import { StatusBar } from "expo-status-bar";
import Modulos from "./componenteModulo";


export default function TelaModulos(){
    return(
        <View style={estilos.container}>
            <ImageBackground
                source={require('./assets/imagem3.jpg')}
                style={estilos.cxImagem3}
                imageStyle={estilos.Imagem3}>
            
            <Text style={{color: "white", fontSize: 20, marginLeft: 20}}
            >Inglês Básico</Text>
            
            <Text style={{color: "white", fontSize: 40, fontWeight: 800, marginLeft: 20, marginBottom: 15}}
            >Lista de módulos</Text>
            
            </ImageBackground>

            
                <ScrollView style={{width: "100%", flex: 1}}>
                    <View style={{alignItems: "center", width: "100%", flex: 1}}>
                    
                    <Modulos titulo="UNIDADE I"
                             desc="Falso cognatos"
                             ch="15"/>
                    <Modulos titulo="UNIDADE II"
                             desc="Principais expressõe da língua inglesa"
                             ch="20"/>
                    <Modulos titulo="UNIDADE III"
                             desc="Verbo To Be"
                             ch="20"/>
                     <Modulos titulo="UNIDADE IV"
                             desc="Verbo To Be"
                             ch="20"/>
                     <Modulos titulo="UNIDADE V"
                             desc="Verbo To Be"
                             ch="20"/>
                     <Modulos titulo="UNIDADE VI"
                             desc="Verbo To Be"
                             ch="20"/>
                      </View>
                    
                </ScrollView>
    
          
            
            <Text></Text>
            <StatusBar style="auto"/>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
       
        
    },
    cxImagem3:{
        width: "100%",
        height: "40%",
        justifyContent: "flex-end"
    },
    Imagem3:{
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 60 
    }
});