import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Switch} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React,{ isValidElement, useState } from 'react';


export default function App() {
  const  [isEnabled, setIsEnabled] = useState (true);
  const  [text, setText] = useState ( 'Lembre-se de mim');


  const ToggleSwitch = () => {
    if (isEnabled){
      setText ('Inactive')
    } else {
      setText ('Active')
    }

    setIsEnabled (previusState => !previusState)
  }

  return ( 
  <>
  <SafeAreaView style={styles.telaPrincipal}> 
     <LinearGradient
     
        colors={['#23b7d9', 'transparent']}
        style={styles.background}>
     
        <View style={styles.fotoPerfil}>
          <LinearGradient
          colors={['#8be9ff', 'transparent']} style={ styles.contorno}>

          <Image style={styles.imagem}
            source={require('./assets/mulher-jovem-sorridente-com-livros-e-mochila-de-pe-em-fundo-branco.png')} />
          </LinearGradient>
        </View>

    <LinearGradient
        colors={['#229bcb', 'transparent']} style={ styles.box}>

     <View style={styles.texto}>
        <Text style={{ color: 'white',fontWeight: 'bold', borderBottomWidth:2, borderColor: 'white', padding: 6}}><FontAwesome5 name="user-alt" size={12} color="white" /> LOGIN:</Text>
        <Text style={{ color: 'white',fontWeight: 'bold', borderBottomWidth:2, borderColor: 'white',padding: 6, marginTop: 25}}><FontAwesome5 name="lock" size={12} color="white" /> SENHA:</Text>
     </View>

      <TouchableOpacity style={styles.botao}> Entrar </TouchableOpacity>

      <View style={styles.texto2}>

        <Switch style={{marginLeft: 3, transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
            trackColor={{ false: '#229bcb', true: 'white'}}
            thumbColor={isEnabled ? 'white' : '#8be9ff'}
            ios_backgroundColor = 'white'
            onValueChange= { ToggleSwitch}
            value= { isEnabled}
          
          />
          <Text style={{ textSize: 5,color: '#8be9ff',marginLeft: 1, marginRight:40,fontSize: 12, }}> Lembre-se de mim </Text>

          <TouchableOpacity style={{ textSize: 5, color: '#8be9ff', fontStyle: 'italic', textDecoration: 'underline'}}> esqueci minha senha</TouchableOpacity>
        </View>

       </LinearGradient>
      </LinearGradient>
  
  </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#229bcb',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#23b7d9',
    borderRadius: 50,
    marginTop: 60,
    height: 300,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 0.01,
    shadowRadius: 5.00,
  },
  texto: {
    marginLeft: 30,
    marginRight: 30,
    
    
   
  },
  texto2: {
    width: 500,
    marginTop: 10,
    flexDirection: 'row',
    marginBotton: '5%' ,
    alignItems: 'center',
    fontSize: 12,

  },
  botao: {
    fontFamily: 'Inter',
    borderRadius: 10000,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
    width: 150,
    height: 40,
    backgroundColor: 'white',
    color: '#23b7d9',


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10.00,
  },
  fotoPerfil: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
    lignContent: 'center',
  },
  contorno: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBotton: 1000,
    marginTop: '22%',
    borderRadius: 45,
    width: 250,
    height: 350,
    

    shadowColor: 'white',
    shadowOffset: { width: -20, height: 0},
    shadowOpacity: 80,
    shadowRadius: 5.00,
  },
  imagem: {
    borderRadius: 40,
    shadowColor: '#61defb',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5.00,
    flex: 1,
    margin: 2,
    resizeMode: 'cover',
    position: 'absolute',
    left: -20,
    right: -20,
    top: '-15%',
    height: '120%',
  },
  background: {
    position: 'absolute',
    borderRadius: 60,
    left: '10%',
    right: '10%',
    top: '10%',
    height:'90%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
