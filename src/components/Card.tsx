import { StyleSheet, Text, View, Image } from "react-native";
import { FeedItem } from "../types/Feed";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      />
      <View style={styles.infospost}>
        <View style={styles.infos}>
          <MaterialIcons name="insert-comment" size={24} color="black" />
          <Text style={styles.subtitle}>{comments}</Text>
        </View>
        <View style={styles.infos}>
          <MaterialCommunityIcons name="repeat-variant" size={24} color="black" />
          <Text style={styles.subtitle}>{reposts}</Text>
        </View>
        <View style={styles.infos}>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.subtitle}>{likes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 7,
    width: "88%",
    marginTop: 10,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 2,

  },
  userInfo: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: -30,
  },
  infospost: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 75,
    gap: 35,
  },
  infos: {
    flexDirection: 'row',
    flex: 1,
    gap: 5
  },
  text: {
    width: '94%',
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 0,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 18,
    marginLeft: 80,
  },
  contentImage: {
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    width: 250,
    height: 380,
    marginBottom: 15,
    marginLeft: 70,
    
  }
});

export default Card;