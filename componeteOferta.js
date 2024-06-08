import {View, Text, StyleSheet} from "react-native";
// componenteOferta
const Oferta = ({nome, precoAntigo, precoNovo})=>{
    return(
        <View style={estilos.caixaOferta}>
            
            <Text style={{color: "white", fontSize: 20}}>{nome}</Text>
            
            <Text style={{color: "white", fontSize: 20, textDecorationLine: "line-through"}}>{precoAntigo}</Text>
            
            <Text
            style={{color: "white", fontSize: 20, }}>{precoNovo}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    caixaOferta:{
        backgroundColor: "red",
        width: 250,
        height: 200,
        borderRadius: 40,
        borderRadius: 40,
        marginRight: 40,
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight:30
    }
});
export default Oferta;
