import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';



export default function App() {
  return (<>
      <ScrollView>
        
      <View style={styles.container}>
    <Image style={styles.owais} source={require('./image/img.jpg')}></Image>
            <Text> <b> Name:</b> owais </Text>
            <Text> <b> Email:</b> owaisakrammadni@gmail.com</Text>
            <Text> <b> Phone:</b> 0349299****</Text>
            <Text> <b> Address:</b> New Karachi Blok 5g</Text>
            

            <View class="a-edu">
        <h1 >Education</h1>

        <ul>
            <li>Hafiz ul Quran:</li>
            <li>Darsay-e-nizami:</li>
            <li>Matrik:</li>

        </ul>
        </View>


        <View class="a-skill">
        <h1 >Skills</h1>
        <ul>
            <li>Hafiz ul Quran:</li>
            <li>Darsay-e-nizami:</li>
            <li>NAZRA:</li>
            <li>MSoffice</li>
           
            
        </ul>
    </View>



    <View class="a-hob">
        <h1 >Hobbies</h1>
        <ul>
            <li>BOOK REDING</li>
            <li>COMPUTER PECTISE</li>
            <li>CRICKET</li>
            <li>FOOTBAOOL</li>
          
           
        </ul>
    </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
