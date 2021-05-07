import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {HatBar} from './src/HatBar';
import { Convert } from './src/Convert';
import { AddConv } from './src/AddConv';

export default function App() {
  const [convs, setConvs] = useState([]);

  const addConv = title => {

    var num = parseFloat(title, 10)/74.577;

    setConvs(prev => [
      ...prev,
      {        
        id: Date.now().toString(),
        title: title + " RUB = " + num.toFixed(2) + " USD"
      }
    ]);
  };

  return (
    <View>
      <HatBar title="Конвертер валют" />
      <View style={styles.container}>
        <Convert onSubmit={addConv} />
        <View>
          {convs.map(addconv=> (
            <AddConv key={addconv.id} addconv={addconv} />
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
