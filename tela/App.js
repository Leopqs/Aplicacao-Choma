import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.nomeHeader}><Text style={{fontSize:26, color:'white', fontWeight:'bold', textShadowColor:'grey',
    textShadowOffset: { width: 1, height: 1.4 }, textShadowRadius: 1,}}>Olá, NOME</Text></View>
          <View style={styles.botoesHeader}>

            <FontAwesome style={{textShadowColor: 'grey', textShadowOffset: { width: 1, height: 2 }, textShadowRadius: 2,}} name="bell" size={34} color="white" />
            <Ionicons style={{textShadowColor: 'grey', textShadowOffset: { width: 1, height: 2 }, textShadowRadius: 2,}} name="person-circle-sharp" size={34} color="white"/>
          </View>
        </View>

        <View style={styles.telaInicial}>
          <View style={styles.carrossel}>
            <Image style={styles.fotoBanner} source={{uri:'https://blog.cp2.g12.br/tijuca2/wp-content/uploads/sites/20/2022/10/Post-Azul-Para-Instagram-Aviso-Importante-1.png'}}></Image>
              <View style={styles.pontinhos}>
                <View style={styles.pontinho}></View>
                <View style={styles.pontinho}></View>
                <View style={styles.pontinho}></View>
              </View>
            </View>
          

          <View style={styles.cards}>
            <View style={styles.cardsCima}>
              <View style={styles.card}><Text style={styles.textoCard}>Calendário</Text><FontAwesome6 style={styles.iconeCard} name="calendar-days" size={80} color="white" /></View>
            </View>

            <View style={styles.cardsBaixo}>
              <View style={[styles.card, {backgroundColor:'#FFCF26'}]}><Text style={styles.textoCard}>Financeiro</Text>
              <FontAwesome6 style={styles.iconeCard} name="sack-dollar" size={80} color="white" /></View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.paginaInicial}>
            <FontAwesome6 name="house-chimney" size={24} color="#FFCF26" />
            <Text style={{color:'#FFCF26'}}>Página Inicial</Text>
          </View>

          <View style={styles.horarios}>
            <MaterialCommunityIcons name="clock" size={24} color="white" />
            <Text style={styles.letraFooter}>Horários</Text>
          </View>

          <View style={styles.turmas}>
            <Ionicons name="document-sharp" size={24} color="white" />
            <Text style={styles.letraFooter}>Turmas</Text>
          </View>

          <View style={styles.configs}>
            <Ionicons name="settings-sharp" size={24} color="white" />
            <Text style={styles.letraFooter}>Configs</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  footer:{
    flexDirection:'row',
    width:'100%',
    height:'8%',
    justifyContent:'space-between',
    backgroundColor:'#15151B',
    padding:'2%',
    alignContent:'end',
    shadowOffset: { width: 0, height:1 },
    shadowOpacity: 0.85,
    shadowRadius: 25,
    zIndex: 10,
  },
  header:{
    width:'100%',
    height:'8%',
    backgroundColor:'#FFCF26',
    flexDirection:'row',
    justifyContent: 'center',
    shadowOffset: { width: 0, height:1 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    zIndex: 10,
    shadowColor:'blue'
  },
  nomeHeader:{
    height:'100%',
    width:'70%',    
    justifyContent: 'center',
  },
  botoesHeader:{
    flexDirection:'row',
    alignItems: 'center',
    height:'100%',
    width:'20%',
    justifyContent:'space-around'
  },
  telaInicial:{
    width:'100%',
    height:'84%',
    backgroundColor:'#D2EDF7',
    alignItems:'center',
  },
  carrossel:{
    width:'90%',
    height:'30%',
    borderRadius:30,
    marginTop:'9%',
    marginBottom:'3%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.65,
    shadowRadius: 12,
  },
  pontinhos:{
    width:'100%',
    position: 'absolute',
    bottom: 10, 
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    zIndex:1000
  },
  pontinho:{
    width:10,
    height:10,
    backgroundColor:'grey',
    borderRadius:100,
    justifyContent:'space-between',
    marginHorizontal:"1%",
  },
  cards:{
    width:'90%',
    height:'50%',
    marginTop:'5%'
  },
  cardsCima:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  cardsBaixo:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20
  },
  card:{
    width:'100%',
    height:'98%',
    backgroundColor:'#2FAB65',
    borderRadius:50,
    flexDirection:'row',
    shadowOffset: { width: 0, height:1 },
    shadowOpacity: 0.45,
    shadowRadius: 15,
    zIndex: 10,
  },
    paginaInicial:{
    justifyContent:'center',
    alignItems:'center'
  },
  horarios:{
    justifyContent:'center',
    alignItems:'center'
  },
  turmas:{
    justifyContent:'center',
    alignItems:'center'
  },
  configs:{
    justifyContent:'center',
    alignItems:'center'
  },
  letraFooter:{
    color:'white'
  },
  textoCard:{
    fontSize:38,
    alignItems:'center',
    marginLeft:25,
    flexDirection:'row',
    marginTop:'15%',
    color:'white',
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 1,
  },
  iconeCard:{
    marginTop: 52,
    marginLeft:12,
  },
  fotoBanner:{
    width:'100%',
    height:'100%',
    borderRadius:30
  }
});
