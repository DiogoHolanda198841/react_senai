import {View, Text, StyleSheet, Image} from "react-native";

//componenteMaisPedidos
const MiasPedido = ()=>{
    return(
        <View style={estilos.caixaPrincipal}>
            <View style={estilos.caixaEsquerda}>
                <Text style={estilos.titulo}>Nome do produto</Text>
                <Text style={estilos.preco}>R$ 1.999,90</Text>
                <Text style={estilos.descricao}>Descrição do produto...</Text>
            </View>
            <View style={estilos.caixaDireita}>
                <Image/>
                    
            </View>
        </View>
    );
}
const estilos =StyleSheet.create({
    titulo:{
        color: "white",
    },
    preco:{
        color: "white",
    },
    descricao:{
        color: "white",
    },

    caixaEsquerda:{
        width: "50%"
    },
    caixaDireita:{
        width: "50%",
        backgroundColor: "white",
        height:"100%",
        borderRadius: 20
    },
    caixaPrincipal:{
        padding: 30,
        flexDirection: "row",
        width: "90%",
        height: 200,
        backgroundColor: "red",
        borderRadius: 40,
        margin: "auto",
        marginBottom: 20

    }

});



export default MiasPedido;