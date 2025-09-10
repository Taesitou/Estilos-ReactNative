import React, { useState } from 'react';
import {
    Alert,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function Perfil() {
  const [nombre, setNombre] = useState('Juan Pérez'); // Cambia por tu nombre
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState('');

  const abrirModal = () => {
    setNuevoNombre(nombre);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setNuevoNombre('');
  };

  const guardarNombre = () => {
    if (nuevoNombre.trim() === '') {
      Alert.alert('Error', 'El nombre no puede estar vacío');
      return;
    }
    setNombre(nuevoNombre.trim());
    cerrarModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Perfil</Text>
      
      <View style={styles.perfilCard}>
        <Text style={styles.etiqueta}>Nombre:</Text>
        <Text style={styles.nombreTexto}>{nombre}</Text>
        
        <Pressable style={styles.botonCambiar} onPress={abrirModal}>
          <Text style={styles.textoBoton}>Cambiar nombre</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cerrarModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Cambiar Nombre</Text>
            
            <TextInput
              style={styles.input}
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
              placeholder="Ingresa tu nuevo nombre"
              autoFocus={true}
            />
            
            <View style={styles.botonesModal}>
              <Pressable
                style={[styles.botonModal, styles.botonCancelar]}
                onPress={cerrarModal}
              >
                <Text style={styles.textoBotonCancelar}>Cancelar</Text>
              </Pressable>
              
              <Pressable
                style={[styles.botonModal, styles.botonGuardar]}
                onPress={guardarNombre}
              >
                <Text style={styles.textoBotonGuardar}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  perfilCard: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  etiqueta: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  nombreTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  botonCambiar: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 300,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  botonesModal: {
    flexDirection: 'row',
    gap: 15,
  },
  botonModal: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  botonCancelar: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  botonGuardar: {
    backgroundColor: '#4CAF50',
  },
  textoBotonCancelar: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
  textoBotonGuardar: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});