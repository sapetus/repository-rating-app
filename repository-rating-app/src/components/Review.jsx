import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as dateFns from 'date-fns';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "white",
    marginBottom: 10,
    paddingBottom: 10
  },
  containerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 13
  },
  containerRight: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 10,
    marginRight: 90
  },
  infoContainer: {
    paddingBottom: 5
  },
  rating: {
    backgroundColor: "white",
    width: 56,
    height: 56,
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 28,
    fontSize: 18
  }
});

const Review = ({ review }) => {
  const parsedDate = dateFns.addDays(dateFns.parseISO(review.createdAt), 1);
  const createdAt = dateFns.format(parsedDate, 'MM/dd/yyyy');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerLeft}>
        <Text style={styles.rating} color="primary" fontSize="subheading" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={styles.containerRight}>
        <View style={styles.infoContainer}>
          <Text fontSize="subheading" fontWeight="bold">{review.user.username}</Text>
          <Text color="textSecondary">{createdAt}</Text>
        </View>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default Review;