import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
export default class App extends React.Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const req = await axios.get("https://reqres.in/api/users");
    this.setState({
      data: req.data.data,
    });
  }

  render() {
     const { avatar, email, first_name, id, last_name } = this.state.data;
    return (
      <View style={styles.container}>
        <FlatList style={styles.FlatList}
          data={this.state.data}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
               onPress={()=> {this.props.navigation.navigate("UserInfo", item);}}
              >
                <View style={styles.profile}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100,
                      marginRight: 5,
                    }}
                  />
                  <Text style={styles.Text}>
                    {item.first_name + "."+item.last_name}
                  </Text>
                  
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id + ""}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 8,
    borderColor: "#333",
  },
 
  Text: {
    fontWeight: "700",
    fontSize: 30,
  },
});