import React from 'react';
import { Text } from 'react-native';
import { AuthContainer } from '../../containers';

const Home = () => {
  console.log('Hello');
  return (
    <AuthContainer>
      <Text>Home</Text>
    </AuthContainer>
  );
};

export default Home;
