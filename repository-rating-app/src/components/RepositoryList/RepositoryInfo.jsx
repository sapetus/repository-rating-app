import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: 250,
    marginLeft: 10
  },
  infoItem: {
    marginBottom: 8
  },
  itemLanguage: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 7
  }
};

const RepositoryInfo = ({ name, description, language }) => {
  return (
    <View style={styles.infoContainer}>
      <Text testID="repositoryName" style={styles.infoItem} fontSize="subheading" fontWeight="bold">
        {name}
      </Text>
      <Text testID="repositoryDescription" style={styles.infoItem} color="textSecondary">
        {description}
      </Text>
      <Text testID="repositoryLanguage" color="textTertiary" style={styles.itemLanguage}>
        {language}
      </Text>
    </View>
  );
};

export default RepositoryInfo;