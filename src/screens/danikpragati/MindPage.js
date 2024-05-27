// import { Text, View } from "react-native";
// import React from "react";
// import { StyleSheet, TextInput, Keyboard, Button } from "react-native";
// import { Feather, Entypo } from "@expo/vector-icons";

// // export const MindPage = () => {
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <View
// //         style={{
// //           alignSelf: "center",

// //           backgroundColor: "red",
// //           height: 100,
// //           width: "80%",
// //           margin: 10,
// //           borderRadius: 30,
// //         }}
// //       >
// //         <Text style={{ padding: 10 }}>MindPage</Text>
// //       </View>
// //     </View>
// //   );
// // };
// import { SearchBar } from 'react-native-elements';

// export const MindPage = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
//   // state = {
//   //   search: '',
//   // };

//   // updateSearch = (search) => {
//   //   this.setState({ search });
//   // };


//   // const { search } = this.state;

//   // return (
//   //   <SearchBar
//   //     placeholder="Type Here..."
//   //     onChangeText={this.updateSearch}
//   //     value={search}
//   //   />
//   // );
//   return (
//     <View style={styles.container}>
//       <View
//         style={
//           clicked
//             ? styles.searchBar__clicked
//             : styles.searchBar__unclicked
//         }
//       >
//         {/* search Icon */}
//         <Feather
//           name="search"
//           size={20}
//           color="black"
//           style={{ marginLeft: 1 }}
//         />
//         {/* Input field */}
//         <TextInput
//           style={styles.input}
//           placeholder="Search"
//           value={searchPhrase}
//           onChangeText={setSearchPhrase}
//           onFocus={() => {
//             setCLicked(true);
//           }}
//         />
//         {/* cross Icon, depending on whether the search bar is clicked or not */}
//         {clicked && (
//           <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
//               setSearchPhrase("")
//           }}/>
//         )}
//       </View>
//       {/* cancel button, depending on whether the search bar is clicked or not */}
//       {clicked && (
//         <View>
//           <Button
//             title="Cancel"
//             onPress={() => {
//               Keyboard.dismiss();
//               setClicked(false);
//             }}
//           ></Button>
//         </View>
//       )}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     margin: 15,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "90%",

//   },
//   searchBar__unclicked: {
//     padding: 10,
//     flexDirection: "row",
//     width: "95%",
//     backgroundColor: "#d9dbda",
//     borderRadius: 15,
//     alignItems: "center",
//   },
//   searchBar__clicked: {
//     padding: 10,
//     flexDirection: "row",
//     width: "80%",
//     backgroundColor: "#d9dbda",
//     borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "space-evenly",
//   },
//   input: {
//     fontSize: 20,
//     marginLeft: 10,
//     width: "90%",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../../searchBarAdd/list";
import SearchBar from "../../searchBarAdd/SearchBar";


export const MindPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Programming Languages</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      { (

          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});