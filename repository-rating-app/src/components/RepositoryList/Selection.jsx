import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

const Selection = ({ refetch }) => {
  const [selectedOrder, setSelectedOrder] = useState("latest");

  const refetchAndOrder = (order) => {
    switch (order) {
      case "latest":
        refetch({
          orderBy: "CREATED_AT",
          orderDirection: "DESC"
        });
        break;
      case "highest rating":
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC"
        });
        break;
      case "lowest rating":
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC"
        });
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedOrder} onValueChange={(itemValue) => {
        setSelectedOrder(itemValue);
        refetchAndOrder(itemValue);
      }
      }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rating" value="highest rating" />
        <Picker.Item label="Lowest rating" value="lowest rating" />
      </Picker>
    </View >
  );
};

export default Selection;