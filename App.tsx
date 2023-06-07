import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <>
      <View>
        <Button title="토글" onPress={onPress} />
        {visible && <Box rounded={true} size="large" color="blue" />}
      </View>
      <Text> 안녕</Text>
    </>
  );
};

export default App;
