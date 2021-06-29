import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet , TouchableOpacity, Pressable } from 'react-native';
import { Avatar2 } from 'images';
import { Color } from 'constants/colors';
import { Button } from 'common/Button';

export const Dossier = () => {
  const onPressHandler = () => {};
  return (
    <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContent}>
      <Image style={styles.avatar} source={Avatar2}></Image>
      <Text style={styles.name}>Name</Text>
      <View style={styles.buttonDiv}>
        <Button label="Редактировать" onPressHandler={onPressHandler} backgroundColor={Color.green} />
        <Button label="Задать состояниe" onPressHandler={onPressHandler} backgroundColor='#FFD56A' textColor='#333333' />
      </View> 
      <View style={styles.paragraph}>
        <Text>Досье</Text>
      </View>
      <View style={styles.paragraph}>
        <Text>Отношения</Text>
      </View>
      <Button label="Удалить персонажа" onPressHandler={onPressHandler}></Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: 20,
  },
  name: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 10,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontVariant: ['small-caps'],
    textTransform: 'lowercase',
    fontSize: 16,
  },
  greenButton: {
    backgroundColor: Color.green,
    borderRadius: 5,
    width: 170,
    margin: 5,
  },
  yellowButton: {
    backgroundColor: '#FFD56A',
  },
  paragraph: {
    minHeight: 150,
  },
  deleteButton: {},
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollview: {
    width: '100%',
    padding: 20,
  },
  scrollviewContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});