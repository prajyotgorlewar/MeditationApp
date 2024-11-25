import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { mindfullness, movement, pranayama, healing, spiritual, focused } from '../constants/meditate';

const meditate = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [data, setData] = useState([]); // Initialize empty data array

  useEffect(() => {
    // Debugging: log the received item
    console.log('Received item.name:', item.name);

    // Match and set data based on the item name
    switch (item.name) {
      case 'Focused':
        setData(focused);
        break;
      case 'Spiritual':
        setData(spiritual);
        break;
      case 'Healing':
        setData(healing);
        break;
      case 'Pranayama':
        setData(pranayama);
        break;
      case 'Movement':
        setData(movement);
        break;
      case 'Mindfullness':
        setData(mindfullness);
        break;
      default:
        setData([]);
    }

    // Debugging: log the final data set
    console.log('Set data:', data);
  }, [item.name]); // Run whenever item.name changes

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={34} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{item.name}</Text>
      </View>

        <Text className="text-3xl  mx-8 underline">Audio Shorts</Text>
      {/* FlatList */}

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => <Card item={item} index={index} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No data available</Text>}
      />
    </SafeAreaView>
  );
};

const Card = ({ item, index }) => {
  return (
    <View style={styles.card} className="h-[230px] p-6 rounded-lg">
      <TouchableOpacity>
        <Image source={item.image} style={styles.cardImage} />
    <View className="mt-2">
    <Text className="text-white">{item.name}</Text>
    <Text className="text-xs text-gray-400">{item.subname}</Text>
    </View>
      </TouchableOpacity>
    </View>
  );
};

export default meditate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  title: {
    fontSize: 24,
    marginLeft: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
  card: {
    marginHorizontal: 8,
    alignItems: 'center',
    
    backgroundColor:"black"
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  cardText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});
