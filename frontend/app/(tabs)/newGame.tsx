import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { API_URL } from 'react-native-dotenv';

export default function AddGameForm() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [metacriticScore, setMetacriticScore] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [developer, setDeveloper] = useState('');
  const [publisher, setPublisher] = useState('');

  const handleSubmit = async () => {
    const gameData = {
      title,
      platform: platform.split(',').map(item => item.trim()),
      metacritic_score: parseInt(metacriticScore),
      release_date: releaseDate,
      genre: genre.split(',').map(item => item.trim()),
      developer,
      publisher,
    };

    try {
      const response = await fetch(`${API_URL}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos del juego');
      }

      const responseData = await response.json();
      Alert.alert('Éxito', 'Juego agregado correctamente');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Alert.alert('Error', 'Hubo un problema al enviar los datos del juego');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajuste según plataforma
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.header}>Agregar un Nuevo Juego</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Plataformas (separadas por coma)"
          value={platform}
          onChangeText={setPlatform}
        />
        <TextInput
          style={styles.input}
          placeholder="Puntaje Metacritic"
          value={metacriticScore}
          keyboardType="numeric"
          onChangeText={setMetacriticScore}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Lanzamiento (YYYY-MM-DD)"
          value={releaseDate}
          onChangeText={setReleaseDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Género (separados por coma)"
          value={genre}
          onChangeText={setGenre}
        />
        <TextInput
          style={styles.input}
          placeholder="Desarrollador"
          value={developer}
          onChangeText={setDeveloper}
        />
        <TextInput
          style={styles.input}
          placeholder="Publisher"
          value={publisher}
          onChangeText={setPublisher}
        />

        <Button title="Enviar" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
