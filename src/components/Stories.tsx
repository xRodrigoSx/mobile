import { StyleSheet, Text, View, Image } from "react-native";
import { Stori } from "../types/Stori";

const Stories = ({
    avatar,
    username,
}: Stori) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>{username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 5,
    },
    avatar: {
        height: 56,
        width: 56,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#00acee",
    },
    username: {
        fontSize: 16,
        color: "#333",
        lineHeight: 22,
        marginVertical: 5,
    }
});

export default Stories;