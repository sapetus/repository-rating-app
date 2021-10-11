import React from 'react';
import { View } from 'react-native';

import Text from '../Text';

const styles = {
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const RepositoryStatistics = ({ value, stat }) => {
  return (
    <View testID={stat} style={styles.statItem}>
      <Text fontSize="subheading" fontWeight="bold">
        {value > 1000 ? (value / 1000).toFixed(1) + "k" : value}
      </Text>
      <Text color="textSecondary">
        {stat}
      </Text>
    </View>
  );
};

export default RepositoryStatistics;