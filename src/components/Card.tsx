import { StyleSheet, Text, View, Image } from "react-native";
import { FeedItem } from "../types/Feed";

const Card = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>

        <Image
          style={styles.avatarImage}
          source={{ uri: avatar }}
          resizeMode="cover"
        />
        <View style={styles.text}>
          <Text style={styles.title}>{username}</Text>
          <Text style={styles.subtitle}>{content}</Text>
        </View>
      </View>
      <Image
        style={styles.contentImage}
        source={{ uri: image }}
        resizeMode='contain'
      />
      <View style={styles.infos}>
      <Text style={styles.subtitle}>{likes}</Text>
      <Text style={styles.subtitle}>{reposts}</Text>
      <Text style={styles.subtitle}>{comments}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 7,
    width: "88%",
    marginTop: 10,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 2,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    flexDirection: "column",
  },
  infos:{
    flex: 1,
    flexDirection: 'row',
    gap: 80,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
    marginTop: 20,
  },
  contentImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Card;