import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Lista from "./components/lista";

export default function RootLayout() {
  const turma = "ESOFS7-A";

  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const ano = hoje.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  const [alunos, setAlunos] = useState([
    { nome: "Amanda Cardoso Pinto", presente: true },
    { nome: "Ana Clara Rodrigues Lima", presente: true },
    { nome: "André Luiz Peixoto", presente: true },
    { nome: "Beatriz Nunes Ribeiro", presente: true },
    { nome: "Bianca Tavares Moura", presente: true },
    { nome: "Bruno Carvalho Rocha", presente: true },
    { nome: "Camila Ribeiro Teixeira", presente: true },
    { nome: "Carolina Duarte Monteiro", presente: true },
    { nome: "Daniela Martins Vieira", presente: true },
    { nome: "Daniela Toreti Final", presente: true },
    { nome: "Diego Ramos Nascimento", presente: true },
    { nome: "Felipe Duarte Mendes", presente: true },
    { nome: "Fernanda Moreira Lopes", presente: true },
    { nome: "Gabriel Oliveira Santos", presente: true },
    { nome: "Gustavo Henrique Silva", presente: true },
    { nome: "Igor Santana Freire", presente: true },
    { nome: "Isabela Gonçalves Batista", presente: true },
    { nome: "João Victor Araújo", presente: true },
    { nome: "Larissa Freitas Campos", presente: true },
    { nome: "Leonardo Cunha Torres", presente: true },
    { nome: "Lucas Almeida Ferreira", presente: true },
    { nome: "Marcelo Andrade Lopes", presente: true },
    { nome: "Mariana Souza Costa", presente: true },
    { nome: "Nathalia Correia Rezende", presente: true },
    { nome: "Patrícia Azevedo Carvalho", presente: true },
    { nome: "Paula Cristina Moreira", presente: true },
    { nome: "Pedro Henrique Martins", presente: true },
    { nome: "Rafael Barbosa Gomes", presente: true },
    { nome: "Renata Borges Cavalcante", presente: true },
    { nome: "Rodrigo Pacheco Barros", presente: true },
    { nome: "Thiago Fernandes Castro", presente: true },
    { nome: "Vanessa Figueiredo Alves", presente: true },
    { nome: "Vinícius Lopes Farias", presente: true },
  ]);

  const total = alunos.length;

  const faltas = alunos.filter((aluno) => !aluno.presente).length;

  function desmarcarTudo() {
    setAlunos((alunosAnteriores) =>
      alunosAnteriores.map((aluno) => ({
        ...aluno,
        presente: false,
      }))
    );
  }

  function marcarTudo() {
    setAlunos((alunosAnteriores) =>
      alunosAnteriores.map((aluno) => ({
        ...aluno,
        presente: true,
      }))
    );
  }

  function alternarPresenca(index: number) {
    setAlunos((alunosAnteriores) =>
      alunosAnteriores.map((aluno, i) =>
        i === index
          ? { ...aluno, presente: !aluno.presente }
          : aluno
      )
    );
  }

  const todosMarcados = alunos.every((aluno) => aluno.presente);

  return (
    <SafeAreaView style={styles.paginaPadrao}>
      <ScrollView>


        <View style={styles.menu}>
          <TouchableOpacity>
            <AntDesign name="arrow-left" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Entypo name="home" size={24} color="white" />
          </TouchableOpacity>
        </View>


        <View style={styles.cabecalho}>
          <View style={styles.linha}>
            <Text style={styles.infoTurma}>Turma: {turma}</Text>
            <Text style={styles.infoTurma}>Faltas: {faltas}/{total}</Text>
          </View>

          <View style={styles.linha}>
            <View style={[styles.divDia, styles.divCabecalhoPadrao]}>
              <Text style={styles.infoDia}>
                Dia: {dataFormatada} <Ionicons name="calendar-clear" size={24} color="#2ca260" />
              </Text>
            </View>

            <View style={[todosMarcados ? { borderColor: "#ee3035" } : { borderColor: "#2ca260" }, styles.divCabecalhoPadrao]}>
              <Text style={todosMarcados ? { color: "#ee3035" } : { color: "#2ca260" }}>
                {todosMarcados ? "Desmarcar tudo" : "Marcar tudo"}
              </Text>

              <TouchableOpacity onPress={todosMarcados ? desmarcarTudo : marcarTudo}>
                {todosMarcados ? (
                  <MaterialCommunityIcons name="checkbox-blank" size={24} color="#ee3035" />
                ) : (
                  <Ionicons name="checkbox" size={24} color="#2ca260" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>


        <View style={{ marginBottom: 10 }}>
          {alunos.map((aluno, index) => (
            <Lista
              key={`${aluno.nome}-${index}`}
              infoAluno={aluno}
              numero={index + 1}
              onToggle={() => alternarPresenca(index)}
            />
          ))}
        </View>

        <View>
          <TouchableOpacity style={styles.salvar}>
            <Text style={{color: "#2ca260"}}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paginaPadrao: {
    flex: 1,
    backgroundColor: "#229acc",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4.3%",
    marginVertical: 10,
  },

  cabecalho: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    height: 150,
    width: "91.3%",
    alignSelf: "center",
    marginBottom: 40,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginHorizontal: 8,
    alignItems: "center",
  },

  infoTurma: {
    backgroundColor: "#229acc",
    color: "white",
    padding: 8,
    borderRadius: 4
  },

  divCabecalhoPadrao: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 8,
  },

  divDia: {
    borderColor: "#2ca260",
  },

  infoDia: {
    color: "#2ca260",
  },

  salvar:{
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4,
    alignSelf: "flex-end",
    marginRight: "4.3%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  }

});