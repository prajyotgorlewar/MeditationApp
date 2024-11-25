import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { recommended } from '../constants/meditate';

const Recommended = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended for you</Text>
      <FlatList
        data={recommended}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <Card2 item={item} index={index} />}
      />
    </View>
  );
};

const Card2 = ({ item }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardSubtitle}>{item.subname}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
  listContainer: {
    paddingBottom: 50,
    paddingTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    marginBottom: 16,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  cardTextContainer: {
    marginTop: 8,
    paddingHorizontal: 4,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
  },
  cardSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
});
