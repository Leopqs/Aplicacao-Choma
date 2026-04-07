import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  infoAluno: {
    nome: string;
    presente: boolean;
  };
  numero: number;
  onToggle: () => void;
};

export default function Lista({ infoAluno, numero, onToggle }: Props) {
  return (
    <View style={styles.lista}>
      <Text style={styles.linha}>{numero}º - {infoAluno.nome}</Text>

      <TouchableOpacity style={styles.botao} onPress={onToggle}>
        {infoAluno.presente ? (
          <Ionicons name="checkbox" size={24} color="#2ca260" />
        ) : (
          <MaterialCommunityIcons name="checkbox-blank" size={24} color="#ee3035" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },

  linha: {
    backgroundColor: "white",
    borderRadius: 4,
    width: "90%",
    padding: 8,
    color: "#229acc",
  },

  botao: {
    backgroundColor: "white",
    padding: 4.5,
    borderRadius: 4,
  }
});