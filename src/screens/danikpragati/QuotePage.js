import { ScrollView,Text,View, Image} from "react-native";


export const QuotePage = () => {
  return (
    <View style={{ flex: 1,backgroundColor: "#ffffff" }}>
    {/* <Text style={{ padding: 10 }}>MindPage</Text> */}
    <Image
    style={{height: 213,
      width:330,
      margin: 15,
      borderRadius:20,
      left:28,
      top:50,}}
    source={{uri: 'https://motivationalwizard.com/wp-content/uploads/2021/10/Mahabharata-Quotes-3.png'}}
    />
    <View><Text style={{fontSize:24,textAlign:"center",fontStyle:'Extrabold',color:'white'}}>SATVIK AAHAR</Text></View>
    <Image
    style={{height: 213,
    width:330,
    margin: 15,
    borderRadius:20,
    left:28,
    top:70,
    }}
  
    source={{uri:'https://i.pinimg.com/736x/5d/54/53/5d545334a5dce140d7a9ed3dc0a215ec.jpg'}}
    />
    <View><Text style={{fontSize:24,textAlign:"center",fontStyle:'Extrabold',color:'white'}}>AYURVEDA AAHAR</Text></View>
    <Image
    style={{height: 213,
    width: 330,
    margin: 15,
    borderRadius:20,
    left:28,
    top:80,
    }}
    source={{uri:'https://www.1mg.com/hi/patanjali/wp-content/uploads/2019/04/Normal-diet-plan-2.jpg'}}
     />
     <View><Text style={{fontSize:24,textAlign:"center",fontStyle:'Extrabold',color:'white'}}>AAHAR VYAVHAR</Text></View>
    </View>
    )
  };
  const scrollToPosition = () => {
    scrollViewRef.current?.scrollTo({ y: 100, animated: true });
  };
