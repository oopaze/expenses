import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';
import { Container, Header, Title, Form } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PicketInput } from "../../components/DatePicket";
//import { getRealm } from "../../database/realm";

export function NewExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [color, setColor] = useState("")
  const [date , setDate] = useState('') 
  
  const navigation = useNavigation();

 
  function handleBack() {
    navigation.goBack();
  }
  /*async function handleNewExpanses(){
    const realm = await getRealm()
    try{
      setIsLoading(true)
    realm.write(()=>{
     realm.create("Expenses",{
      label,
      value,
      color
     })
    })
    }catch(err){

    }
  }*/

  return (
    <Container>
      <Header>
        <Title>Nova Dispesa</Title>
      </Header>

      <Form>
        <Input placeholder="Nome" onChangeText={setLabel} />

        <Input placeholder="Valor" onChangeText={setValue} />
        <RNPickerSelect
            onValueChange={(value) => setColor(value)}
            placeholder={{label: 'Selecione a cor', value: null, color: '#383B43'}}
            items={[
                { label: 'Verde', value: '#267365' },
                { label: 'Amarela', value: '#F2CB05' },
                { label: 'Laranja', value: '#F29F05' },
                { label: 'Vermelho', value: '#F23030' },
            ]}
            style={{viewContainer: {borderWidth:1,paddingLeft: 10,borderColor: '#C5CADA',backgroundColor: '#fff',borderRadius: 10}}} 
        />
        <PicketInput  onChangeText={setDate} />

        <RNPickerSelect
            onValueChange={(value) => setColor(value)}
            placeholder={{label: 'Status', value: null, color: '#383B43'}}
            items={[
                { label: 'Pago', value: '#267365' },
                { label: 'Pendente', value: '#F2CB05' }
            ]}
            style={{viewContainer: {borderWidth:1,marginTop: 5,paddingLeft: 10, borderColor: '#C5CADA',backgroundColor: '#fff',borderRadius: 10}}} 
        />
      </Form>

      <Button title="Salvar" isLoading={isLoading}  />
    </Container>
  );
}
