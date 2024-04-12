import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { FeedItem } from "../types/Feed";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Stories from "../components/Stories";
import { Stori } from "../types/Stori";

const Home = () => {
  const feed: Stori[] = [
      {
        "id": "1",
        "avatar": "https://source.unsplash.com/random?t=1",
        "username": "Miguel"
      },
      {
        "id": "2",
        "avatar": "https://source.unsplash.com/random?t=2",
        "username": "Lucas"
      },
      {
        "id": "3",
        "avatar": "https://source.unsplash.com/random?t=3",
        "username": "Maria"
      },
      {
        "id": "4",
        "avatar": "https://source.unsplash.com/random?t=4",
        "username": "Ana"
      },
      {
        "id": "5",
        "avatar": "https://source.unsplash.com/random?t=5",
        "username": "Thomas"
      },
      {
        "id": "6",
        "avatar": "https://source.unsplash.com/random?t=6",
        "username": "João"
      },
      {
        "id": "7",
        "avatar": "https://source.unsplash.com/random?t=7",
        "username": "Carla"
      },
      {
        "id": "8",
        "avatar": "https://source.unsplash.com/random?t=8",
        "username": "Paulo"
      }
  ];
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://source.unsplash.com/random?t=9",
      username: "Rafael",
      content: "Golfinhos são muito inteligentes, eu adorei!",
      image: "https://source.unsplash.com/random?t=11",
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://source.unsplash.com/random?t=10",
      username: "Luis",
      content: "Papagaios são muito chatos na moral, mas legal no visual.",
      image: "https://source.unsplash.com/random?t=12",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
    {
      id: "3",
      avatar: "https://source.unsplash.com/random?t=13",
      username: "Julia",
      content: "A natureza é sempre surpreendente, nunca deixa de me encantar!",
      image: "https://source.unsplash.com/random?t=14",
      likes: 20,
      reposts: 15,
      comments: 30,
    },
    {
      id: "4",
      avatar: "https://source.unsplash.com/random?t=15",
      username: "Pedro",
      content: "A vida é melhor com um cachorro ao seu lado. 🐶❤️",
      image: "https://source.unsplash.com/random?t=16",
      likes: 35,
      reposts: 25,
      comments: 50
    },
    {
      id: "5",
      avatar: "https://source.unsplash.com/random?t=17",
      username: "Ana",
      content: "Explorando novos lugares e culturas!",
      image: "https://source.unsplash.com/random?t=18",
      likes: 15,
      reposts: 8,
      comments: 20
    }
    
  ];

  return (
    <View>
      <View style={styles.title}>
        <Entypo name="menu" size={30} color="#00acee" />
        <AntDesign name="twitter" size={30} color="#00acee" />
        <Entypo name="user" size={30} color="#00acee" />
      </View>
      <View style={styles.stories}>
        <FlatList
          data={feed}
          renderItem={({ item }) => (
            <Stories
              id={item.id}
              avatar={item.avatar}
              username={item.username} />
          )}
          contentContainerStyle={{gap: 12}}
          horizontal
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              avatar={item.avatar}
              username={item.username}
              content={item.content}
              image={item.image}
              likes={item.likes}
              reposts={item.reposts}
              comments={item.comments}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  title: {
    height: 40,
    marginTop: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
  },
  stories: {
    backgroundColor: 'white',
    height: 110,
    marginHorizontal: 13,
  }
});

export default Home;