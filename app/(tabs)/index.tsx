import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";

const Tarjeta = ({ texto }: { texto: string }) => {
  const [isPressed, setIsPressed] = useState(false);

  
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <Pressable 
      onPress={handlePress}
      style={[
        styles.tarjeta,
        isPressed ? styles.tarjetaPressed : styles.tarjetaDefault
      ]}
    >
      <Text 
        style={[
          styles.textoTarjeta,
          isPressed ? styles.textoPressed : styles.textoDefault
        ]}
      >
      {texto}
      </Text>
    </Pressable>
  );
};

// Componente principal con la lista de tarjetas
const App = () => {
  const tarjetas = [
    'Primera Tarjeta',
    'Segunda Tarjeta', 
    'Tercera Tarjeta',
    'Cuarta Tarjeta',
    'Quinta Tarjeta'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Lista de Tarjetas Interactivas
      </Text>
      
      <Text style={styles.subtitulo}>
        Toca las tarjetas para cambiar su color
      </Text>

      {tarjetas.map((textoTarjeta, index) => (
        <Tarjeta 
          key={index}
          texto={textoTarjeta}
        />
      ))}
    </View>
  );
};

// StyleSheet usando los conceptos vistos en clase
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#333'
  },

  subtitulo: {
    fontSize: 14,
    textAlign: 'center', 
    margin: 10,
    color: '#666'
  },

  tarjeta: {
    padding: 20,
    margin: 10,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

  tarjetaDefault: {
    backgroundColor: '#2196F3'
  },

  tarjetaPressed: {
    backgroundColor: '#4CAF50'
  },

  textoTarjeta: {
    fontSize: 16,
    textAlign: 'center'
  },

  textoDefault: {
    color: '#FFFFFF'
  },
  textoPressed: {
    color: '#000000'
  }
});

export default App;