import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView} from "react-native";
import { TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Oferta from "./componeteOferta";
import Categoria from "./componenteCategoria";
import MiasPedido from "./componenteMaisPedidos";
//Tela Loja
export default function TelaLoja(){
    return(
        <ScrollView style={estilos.container}>
            <View style={estilos.cxLoja}>
                <View style={estilos.cxTitulo}>
                   <View style={estilos.avatar}>
                    <Ionicons
                        name="person"
                        size={40}
                        color="#a77878"/>
                   </View>
                   <View style={estilos.avatar2}>
                        <Text style={{color: "white"}}>Bem vindo!</Text>
                        <Text style={{color: "white"}}>Fulano de Tal</Text>
                   </View>
                </View>

                <View style={estilos.cxPesquisa}>
                <TextInput 
                    placeholder="Pesquisar"
                    style={estilos.pesquisa}/>
                
                <TouchableOpacity style={estilos.btnPesquisa}>
                    <Ionicons
                        name="search"
                        size={30}
                        color="#626262"/>
                </TouchableOpacity>
                </View>    
            </View>
                <Text style={{fontSize: 25, margin: 15}}>Oferta

                </Text>
                
                <ScrollView horizontal={true} style={{maxHeight: 220}}>
                        <Oferta nome="Smartphone"
                                precoAntigo="1.999,90"
                                precoNovo="1699,90"/>
                        <Oferta nome="Notebook I5"
                                precoAntigo="2.299,90"
                                precoNovo="1399,90"/>
                        <Oferta nome="Geladeira 480L"
                                precoAntigo="5.299,90"
                                precoNovo="4.699,90"/>
                        <Oferta nome="Mesa 6 cadeiras"
                                precoAntigo="1.199,90"
                                precoNovo="949,90"/>
                        <Oferta/>
                        <Oferta/>
                        <Oferta/>

                </ScrollView>

                <Text style={{fontSize: 25, margin: 15}}>Categorias
                </Text>
                <ScrollView horizontal={true}>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                    <Categoria/>
                </ScrollView>

                <Text style={{fontSize: 25, margin: 15}}>Mais Pedidos
                </Text>
                <ScrollView horizontal={true}>

                </ScrollView>
                <MiasPedido/>
                <MiasPedido/>
                <MiasPedido/>
                <MiasPedido/>
                <MiasPedido/>
                <MiasPedido/>
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    cxLoja:{
        backgroundColor: "red",
        height: 230,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40  

    },
    cxTitulo:{
        marginTop: 50,
        marginLeft: 30,
        flexDirection: "row"
    },
    avatar:{
        backgroundColor: "yellow",
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    avatar2:{
        marginLeft: 20,
        marginTop: 10        
    },
    cxPesquisa:{
        marginTop: 40,
        flexDirection: "row",
        
    },
    pesquisa:{
        justifyContent: "space-between",
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "70%",
        height: 40,
        marginLeft: 20,
        marginRight: 15
    },
    btnPesquisa:{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        marginRight: 50
    }
    

    
    
});