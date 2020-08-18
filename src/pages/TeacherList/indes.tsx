import React from 'react';
import { View, ScrollView } from "react-native";
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffy disponíveis" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: -20,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>

    </View>

  );
}

export default TeacherList;