import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Đăng nhập</Text>

      {/* Title */}
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại để đưa qua bên cam
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          phone.length === 0 && styles.buttonDisabled
        ]}
        disabled={phone.length === 0}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 40
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonDisabled: {
    backgroundColor: '#f0f0f0'
  },
  buttonText: {
    fontSize: 16,
    color: '#999'
  }
});
