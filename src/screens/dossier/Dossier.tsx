import React from 'react';
import { ScrollView, View, Image, Text, Button, StyleSheet , TouchableOpacity} from 'react-native';
import { Avatar2 } from 'images';

export const Dossier = () => {
  const onPressHandler = () => {};
  return (
    <ScrollView>
      <Image style={styles.avatar} source={Avatar2}></Image>
      <Text style={styles.name}>Name</Text>
      <View>
        <TouchableOpacity style={{...styles.button, backgroundColor: "#EDFCB4"}} onPress={onPressHandler}>
          Редактировать
        </TouchableOpacity>
        <Button color="#FFD56A" title="Задать состояния" onPress={onPressHandler} />
      </View>
      <View>
        <Text>Досье</Text>
        {/* add Pressable? */}
      </View>
      <View>
        <Text>Отношения</Text>
      </View>
      <Button title="Удалить персонажа" onPress={onPressHandler}></Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    width: 100,
    height: 100
  },
  name: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  button: {
    color: '#333333',
    borderRadius: 5,
  },
  paragraph: {},
  deleteButton: {},
});