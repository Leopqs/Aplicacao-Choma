import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Campo from './campos';

export default function App() {
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back-ios" size={30} color="white"/>
        </TouchableOpacity>

         <TouchableOpacity>
          <MaterialIcons name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.fotoCard}>

        <LinearGradient
          colors={['#18A851', 'transparent']}
          style={styles.gradiente}
        />

        <Image
          source={require('./pngwing.com.png')}
          style={styles.foto}
          resizeMode="cover"
        />

        <View style={styles.efeito}/></View>

        <View style={styles.infoCard}>

      <LinearGradient
        colors={[
            'rgba(24,168,81,0)',
            'rgba(24,168,81,0.25)',
            'rgba(24,168,81,0.45)'
        ]}
        style={styles.gradiente}
      />

    <View style={styles.conteudoInfo}>
      <Text style={styles.tituloSecao}>DADOS DO ALUNO</Text>

      <Campo label="Nome:" valor="Luana Almeida Vieira" />

      <View style={styles.linha}>
        <Campo label="Data de Nascimento" valor="DD/MM/YYYY" />
        <View style={styles.espaco} />
        <Campo label="Idade" valor="15 ANOS" pequeno />
      </View>

      <Text style={styles.tituloSecao}>DADOS DO RESPONSÁVEL</Text>

      <Campo label="Nome:" valor="REGINA ALMEIDA" />

      <View style={styles.linha}>
        <Campo label="CPF" valor="123.456.789-10" />
        <View style={styles.espaco} />
        <Campo label="Celular" valor="(44) 9167-0511" />
      </View>

        <View style={styles.linha}>
          <Campo label="Data de Nascimento" valor="DD/MM/YYYY" />
          <View style={styles.espaco} />
          <Campo label="Idade" valor="40 ANOS" pequeno />
        </View>
    </View>

    </View>

  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18A851',
    paddingHorizontal: 16
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  fotoCard: {
    width: '100%',
    height: 320,
    marginTop:10,
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fff',
  },

  efeito: {
    position: 'absolute',
    top: 2,
    left: 1,
    width: 200,
    height: 280,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#rgba(255,255,255,0.85)',
    borderTopLeftRadius: 23,
    zIndex: 2,
  },

  foto: {
    width: '100%',
    height: '100%',
  },

  gradiente: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },

  infoCard: {
    marginTop: 14,
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,

  },

  tituloSecao: {
    fontSize: 15,
    color: 'rgba(56,168,97,0.75)',
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 6,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  espaco: {
    width: 10,
  },

  conteudoInfo: {
    zIndex: 2
  },
 
});
