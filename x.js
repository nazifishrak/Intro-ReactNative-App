import React, {Component, useState, StatusBar} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

let r,g,b;
r= 100
g=25
b =30


export default function App() {


  const [q, setQ]= useState(`rgb(${r},${g},${b})`)
chngbg=()=>{
  r = Math.floor(Math.random()*256)
   g = Math.floor(Math.random()*256)
  b = Math.floor(Math.random()*256)

  setQ(`rgb(${r},${g},${b})`)
  
}
  return (
    <>
    <StatusBar backgroundColor={q} />
      <View style={[styles.x]}>
        <TouchableOpacity onPress={chngbg}>
          <Text style={styles.y}> Tap Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  x: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: q ,
  },
  y: {
    backgroundColor: '#BB2CD9',
    fontFamily: 'Arial',
    fontSize: 34,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 15,
  },
});
