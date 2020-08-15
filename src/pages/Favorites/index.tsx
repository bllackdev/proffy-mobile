import React from 'react';
import { View } from "react-native";

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favorires() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffy favoritos" />
    </View>
  );
}

export default Favorires;