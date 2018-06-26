import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const Styles = {
    styleText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    styleView:{
        backgroundColor: 'skyblue',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    styleImage:{
        width: 200,
        height: 100,
        resizeMode: Image.resizeMode.contain,
    }, 

    styleButton:{
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20
    }
};

const createPhrase = () => {
    var randNumber = Math.random();
    randNumber = Math.floor(randNumber * 5)
    
    var frases = Array();
    frases[0] = 'Não existe um caminho para a felicidade. A própria felicidade é o caminho';
    frases[1] = 'É melhor se arrepender do que você fez, do que se arrepender de não ter feito';
    frases[2] = 'A genialidade é 1% inspiração e 99% transpiração';
    frases[3] = 'É melhor chorar por amor do que nunca ter amado';
    frases[4] = 'As vezes pra não doer nunca mais, tem que doer como nunca';
    frases[5] = 'Comece onde você está. Use o que você tem. Faça o que você pode.';
    frases[6] = 'Não podemos voltar no tempo e recomeçar, mas podemos começar agora e fazer um novo fim';
    frases[7] = 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'
    frases[8] = 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação'

    Alert.alert('Frase escolhida',frases[randNumber]);
    
}

const App = () => {
    const {styleText, styleView, styleImage, styleButton} = Styles;
    return (
        <View style={styleView}>
            <Image source ={require('./imgs/segunda_motivada.jpg')} style={styleImage} />

            <TouchableOpacity style={styleButton} onPress={createPhrase}>
                <Text style={styleText}>Qual a frase do dia</Text>
            </TouchableOpacity>
        
        </View>
    );
};

AppRegistry.registerComponent('SegundaMotivada', () => App);