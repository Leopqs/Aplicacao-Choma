import { View, Text, StyleSheet } from 'react-native';

export default function Campo({ label, valor, pequeno = false }) {
  return (
    <View style={[styles.campo, pequeno && styles.campoPequeno]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.valor} numberOfLines={1}>
        {valor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    flex: 1,
    minHeight: 52,
    borderWidth: 2,
    borderColor: '#38A861',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.35)',
    marginBottom: 5,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E9B57',
    marginBottom: 1,
  },

  valor: {
    fontSize: 16,
    fontWeight: '550',
    color: '#808080',
  },
});