import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [q, setQ] = useState('rgb(32,0,241)');
  const chngbg = () => {
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)})`;

    setQ(color);
  };

  const chngbg2 = () => {
    setQ('white');
  };
  return (
    <>
      <StatusBar backgroundColor={q} />
      <View style={[styles.x, {backgroundColor: q}]}>
        <TouchableOpacity onPress={chngbg}>
          <Text style={[styles.y]}>Click me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={chngbg2}>
          <Text
            style={[styles.y, {backgroundColor: '#000000'}, {color: 'white'}]}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  x: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 20,
  },
});
