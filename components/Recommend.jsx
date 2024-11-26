import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { recommended } from '../constants/meditate';

const Recommend = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} className="text-[20px] mx-10 text-center   text-[#84bdfd]">Recommended for you</Text>
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
    <View style={styles.card} className="bg-[#ffffff17]">
      <TouchableOpacity>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle} className="text-center text-white ">{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  title: {

    marginLeft: 16,
    marginBottom: 12,
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
    fontSize: 16
  },
  cardSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
});
