import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  searchbar: {
    marginBottom: 10
  }
});

const Selection = ({ refetch }) => {
  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [textInput, setTextInput] = useState("");
  const [value] = useDebounce(textInput, 500);

  useEffect(() => {
    switch (selectedOrder) {
      case "latest":
        refetch({
          orderBy: "CREATED_AT",
          orderDirection: "DESC",
          searchKeyword: value
        });
        break;
      case "highest rating":
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC",
          searchKeyword: value
        });
        break;
      case "lowest rating":
        refetch({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
          searchKeyword: value
        });
        break;
    }
  }, [selectedOrder, value]);

  const onChangeSearch = query => setTextInput(query);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        placeholder="search"
        onChangeText={onChangeSearch}
        value={textInput}
      />
      <Picker selectedValue={selectedOrder} onValueChange={(itemValue) =>
        setSelectedOrder(itemValue)
      }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rating" value="highest rating" />
        <Picker.Item label="Lowest rating" value="lowest rating" />
      </Picker>
    </View >
  );
};

export default Selection;