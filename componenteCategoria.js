import{View, Text, StyleSheet} from "react-native";

// CRIAÇÃO DE UM COMPONENTE
//componenteCategoria
const Categoria = ()=>{
    return(
        <View style={estilos.caixa}>
            <View style={estilos.bolaVermelha}></View>
            <Text>Opção 1</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    bolaVermelha:{
        width: 90,
        height: 90,
        backgroundColor: "red",
        borderRadius: 90
    },
    caixa:{
        alignItems: "center",
        marginRight: 10
    }

});
export default Categoria;