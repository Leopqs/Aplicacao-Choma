import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, FontAwesome, Octicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function RootLayout() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={[styles.boxCabecalho, styles.margeBoxmPadrao]}> 

          <View style={styles.topoCabecalho}>
            <TouchableOpacity>
              <Entypo name="chevron-left" size={30} color='#F23030'/>
            </TouchableOpacity>

            <Text style={styles.titulo}>Definir Turmas</Text>

            <TouchableOpacity>
              <Entypo name="home" size={30} color='#F23030'/>
            </TouchableOpacity>
          </View>

          <View style={styles.conteudoCabecalho}>
            <View style={styles.nomeProfessor}>
              <Text style={styles.estiloTextoNegrito}>Professor: </Text>
              <Text style={styles.estiloTexto}>Lucia Maria Aguiar</Text>
            </View>

            <View style={styles.especificacoesProfessor}>
              <View style={styles.materia}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.estiloTextoNegrito}>Matéria: </Text>
                  <Text style={styles.estiloTexto}>Matemática</Text>
              </View>

                <TouchableOpacity>
                  <Entypo name="chevron-small-down" size={20} color='white' style={{justifyContent: 'flex-end'}}/>
                </TouchableOpacity>
    
              </View>

              <View style={styles.periodo}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.estiloTextoNegrito}>Período: </Text>
                <Text style={styles.estiloTexto}>Matutino</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="chevron-small-down" size={20} color="white" />
              </TouchableOpacity>
            </View>
            </View>
            
          </View>
        </View>

        <LinearGradient
          colors={['#FFFFFF', '#FF7A7A', '#F23030']}
          locations={[0, 0.37, 1]}
          start={{ x: 0, y: 0.5}}
          end={{ x: 0, y: 1 }}
          style={[styles.boxHorarios, styles.margeBoxmPadrao]}
      > 
          <View style={styles.tituloHorarios}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}> SEUS HORÁRIOS</Text>
          </View>

          <View style={styles.conteudoHorarios}>
          {['Segunda','Terça','Quarta','Quinta','Sexta'].map((dia) => (
            <View key={dia} style={styles.linhaDia}>
            <View style={styles.boxDias}>
              <Text style={styles.estiloTextoSemana}>{dia}</Text>
            </View>

            <TouchableOpacity style={styles.botaoAddFora}>
              <FontAwesome name="plus-square-o" size={52} color="white" />
            </TouchableOpacity>
          </View>
          ))}

          <View style={styles.rodapeHorarios}>
            <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
              Adicionar Descrição de Horários
            </Text>
            <TouchableOpacity>
              <Octicons name="plus-circle" size={14} color="white" style={{marginLeft: 10, marginTop: 2}}/>
            </TouchableOpacity>
          </View>
      </View>
        </LinearGradient>

        <View style={[styles.boxTurmas, styles.margeBoxmPadrao]}> 
          <View style={styles.tituloTurmas}> 
            <Text style={styles.textoTituloTurmas}>SUAS TURMAS</Text>
          </View>

          {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'].map((dia) => (
            <View key={dia} style={{marginBottom: 20}}>
              <Text style={styles.textoDiaTurma}>{dia}</Text>
              <View style={styles.linhaSeparacao} />

              <View style={styles.listaTurmas}>
                {[1,2,3].map((item) => (
                  <View key={item} style={styles.linhaTurma}>

                    <View style={styles.boxTurma}>
                      <Text style={styles.estiloTextoTurma}>
                        TURMA - {item} - SALA {20 + item}
                      </Text>
                    </View>

                    <View style={styles.listaAlunos}>
                      <Text style={styles.estiloTextoAluno}>ALUNOS</Text>
                      <TouchableOpacity>
                        <Entypo name="chevron-small-down" size={20} color="red" />
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.botaoAddTurma}>
                      <FontAwesome name="plus-square-o" size={46} color="#1BA456" />
                    </TouchableOpacity>

                  </View>
                ))}
              </View>
        </View>
      ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23030'
  
  },

  margeBoxmPadrao: {
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 18,
  },

  boxCabecalho: {
    height: 144,
    backgroundColor: 'white',
    marginTop: 20,
  },

  boxHorarios: {
    height: 470,
    backgroundColor: 'white',
    marginTop: 30,
  },

  boxTurmas: {
    backgroundColor: '#1EA4D9',
    marginTop: 30,
    marginBottom: 30,
  },

  topoCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F23030'
  },

  conteudoCabecalho: {
    marginTop: 10
  },

  estiloTextoNegrito: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },

  estiloTexto: {
    color: 'white',
    fontSize: 14,
    marginLeft: 3,
  },

  nomeProfessor: {
    flexDirection: 'row',
    backgroundColor: '#1EA4D9',
    padding: 7,
    borderRadius: 8,
  },

  especificacoesProfessor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  materia: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1EA4D9',
    padding: 7,
    borderRadius: 8,
    marginRight: 2,
  },

  periodo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1EA4D9',
    padding: 7,
    borderRadius: 8,
    marginLeft: 2,
  },

  tituloHorarios: {
    backgroundColor: '#F23030',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 4,
  },

  conteudoHorarios: {
    marginTop: 10,
  },

  linhaDia: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  boxDias: {
    flex: 1, 
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  botaoAddFora: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  estiloTextoSemana: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
  },

  botaoAddContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},

rodapeHorarios: {
    flexDirection: 'row',
    alignItems: 'center',
},
  
tituloTurmas: {
    alignItems: 'center',
    padding: 14,
},

textoTituloTurmas: {
  color: 'white',
  fontSize: 26,
  fontWeight: '400',
},

conteudoTurmas: {
  marginTop: 8,
},

textoDiaTurma: {
  color: 'white',
  fontSize: 20,
  fontWeight: '500',
  marginBottom: 10,
},

linhaSeparacao: {
  height: 2,
  backgroundColor: 'white',
  marginBottom: 15,
  borderRadius: 10,
},

listaTurmas: {
  gap: 12,
},

linhaTurma: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#BCE4F4',
  borderRadius: 10,
  minHeight: 50,
},

boxTurma: {
  flex: 3,
  backgroundColor: 'white',
  paddingVertical: 14,
  borderRadius: 10,
  justifyContent: 'center',
  marginRight: 10,
},

estiloTextoTurma: {
  color: 'red',
  fontSize: 16,
  fontWeight: '500',
  marginLeft: 15,
},

listaAlunos: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  paddingVertical: 14,
  paddingHorizontal: 15,
  borderRadius: 10,
},

estiloTextoAluno: {
  color: 'red',
  fontSize: 16,
  fontWeight: '500',
},

botaoAddTurma: {
  flex: 0.3,
  marginLeft: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
});