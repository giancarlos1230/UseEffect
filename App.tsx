import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';


const App = () => {

  const [text, setText] = useState('1990')
  const [edad, setEdad] = useState(0)
  const [nombre, setNombre] = useState('')
  const [usuarios, setUsuarios] = useState([{

    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
  }
])

const calcularEdad = (t : string) => {
  const _edad = 2021 - parseInt(t)
  setEdad(_edad)
}

const calcularEdadNew = () => {
  const _edad = 2021 - parseInt(text)
  setEdad(_edad)
}

useEffect(() => {
  calcularEdad(text)
}, [text])

useEffect(() => {
 setNombre('Gianca')
}, [])

  return (  
    <View style={styles.container}>
    <TextInput style={{borderColor: 'black',  borderWidth: 2}} 
    onChangeText={setText}/>

    <Text> Hola {nombre}, tu edad aprox.  es: {edad} {text}</Text>
    {
      usuarios.map(u => (
    <Text key ={u.id}>{u.id} - {u.name}</Text>
  ))
  }
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  flex: 1,
  alignItems: 'center',  
  justifyContent: 'center'

}
});

export default App;