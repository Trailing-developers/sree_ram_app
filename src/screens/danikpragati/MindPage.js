import { Text, View, Image} from "react-native";
import { colors } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const MindPage = () => {
  const navigation = useNavigation();
  const handlemindpress = () => {
    navigation.navigate("ManifestPage");
  };
    const handlesubpress = () => {
      navigation.navigate("SubliminalsPage");
    };
  return (
    <ScrollView>
    <View style={{ backgroundColor: colors.bhagwa }}>
    {/* <Text style={{ padding: 10 }}>MindPage</Text> */}
    <TouchableOpacity onPress={() => handlemindpress()}>
    <Image
    style={{height: 213,
      width:300,
      borderRadius:15,
      marginLeft:10,
      left:20,}}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmNM8T4cEE8yUHU1IHGkaYGrGEv0VQfCBSQ&s'}}
    />
    <View><Text style={{fontSize:16,fontStyle:'Extrabold',color:'white'}}>MANIFEST</Text></View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handlesubpress()}>
    <Image
    style={{height: 213,
    width:300,
    left:40,
    borderRadius:15,
    }}
    source={{uri:'https://i.cdn.newsbytesapp.com/images/l2520230904181838.jpeg'}}
    />
    <View><Text style={{fontSize:22,fontSize:24,fontStyle:'Extrabold',color:'white'}}>SUBLIMINALS</Text></View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handlemindpress()}>
    <Image
    style={{height: 213,
    width:300,
    left:40,
    borderRadius:15,
    }}
    source={{uri:'https://i.cdn.newsbytesapp.com/images/l2520230904181838.jpeg'}}
    />
    <View><Text style={{fontSize:24,textAlign:"center",fontStyle:'Extrabold',color:'white'}}>SUBLIMINALS</Text></View>
    </TouchableOpacity>
    </View>
    </ScrollView>
  )
};