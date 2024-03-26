import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { FeedItem } from "../types/Feed";

const Home = () => {
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://source.unsplash.com/random",
      username: "Rafael",
      content: "Golfinhos são muito inteligentes, eu adorei!",
      image: "https://source.unsplash.com/random",
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://source.unsplash.com/random",
      username: "Fulano",
      content: "Papagaios são muito chatos na moral, mas legal no visual.",
      image: "https://source.unsplash.com/random",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Posts</Text>
      <View style= {styles.container}>
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
    </View>
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
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;