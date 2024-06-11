import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { colors } from '../../constants/theme';
import { width } from '../DarshanScreen/TempleCarousel';
export const NutritionPage = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={{ flex: 1, backgroundColor: colors.bhagwa, flexDirection: 'row' }}>
        {/* <Text style={{ padding: 10 }}>Page</Text> */}
        <Image
          style={{
            height: 213,
            width: 330,
            borderRadius: 20,
            left: 40,
            top: 60,
            opacity:0.9,
          }}
          source={{ uri: 'https://www.healthshots.com/hindi/wp-content/uploads/2020/07/Satvik-diet.jpg' }}
        />
        <View style={{position:'absolute',top:180,left:130}}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
            SATVIK AAHAR
          </Text>
        </View>
        <Image
          style={{
            height: 213,
            width: 330,
            paddingLeft:10,
            borderRadius: 20,
            left: 88,
            top: 60,
          }}
          source={{ uri: 'https://ayushkitchen.com/wp-content/uploads/2022/12/chwanprash-benefits-1300x589.jpg' }}
        />
        <View style={{ position:'absolute',top:180,left:470}}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
            AYURVEDA AAHAR
          </Text>
        </View>
        <Image
          style={{
            height: 213,
            width: 330,
            borderRadius: 20,
            left: 122,
            top: 60,
            marginLeft:10,
            opacity:0.9,
          }}
          source={{ uri: 'https://www.1mg.com/hi/patanjali/wp-content/uploads/2019/04/Normal-diet-plan-2.jpg' }}
        />
        <View style={{ position:'space-around',top:180,right:150}}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
            AAHAR VYAVHAR    
          </Text>
        </View>
        <View style={{backgroundColor:colors.gray,width:100,height:30,position:'center',top:400}}></View>
        <View style={{flexDirection:'row',top:400}}><Text>RAJASTHANI LAPSI INGREDIENTS
         1.150 gm broken wheat (dalia)
         2.1/4 cup chopped coconut
         3. 2 piece green cardamom
         4.200 gm jaggery
         5.2 tablespoon chopped cashews
         6.4 tablespoon ghee</Text></View>
      </View>
    </ScrollView>
  );
};
