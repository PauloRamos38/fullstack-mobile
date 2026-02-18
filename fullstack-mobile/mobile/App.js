import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StatusBar
} from 'react-native';

// Configuração da API
const API_URL = 'http://localhost:3000/api/users';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // Carregar usuários ao iniciar
  useEffect(() => {
    loadUsers();
  }, []);

  // Função para carregar usuários
  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      if (data.success) {
        setUsers(data.data);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os usuários');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar usuário
  const addUser = async () => {
    if (!name || !email || !role) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, role }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setName('');
        setEmail('');
        setRole('');
        loadUsers();
      } else {
        Alert.alert('Erro', data.message);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Função para remover usuário
  const deleteUser = async (id) => {
    Alert.alert(
      'Confirmar',
      'Deseja realmente remover este usuário?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: async () => {
            setLoading(true);
            try {
              const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
              });

              const data = await response.json();

              if (data.success) {
                Alert.alert('Sucesso', 'Usuário removido com sucesso!');
                loadUsers();
              } else {
                Alert.alert('Erro', data.message);
              }
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível remover o usuário');
              console.error(error);
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  // Renderizar item da lista
  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
        <Text style={styles.userRole}>{item.role}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteUser(item.id)}
      >
        <Text style={styles.deleteButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👥 Gerenciador de Usuários</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Cadastrar Novo Usuário</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Cargo"
          value={role}
          onChangeText={setRole}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addUser}
          disabled={loading}
        >
          <Text style={styles.addButtonText}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Usuários Cadastrados ({users.length})</Text>
        
        {loading && <ActivityIndicator size="large" color="#007AFF" />}
        
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            !loading && (
              <Text style={styles.emptyText}>Nenhum usuário cadastrado</Text>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  form: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  userCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  userRole: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginTop: 20,
  },
});
