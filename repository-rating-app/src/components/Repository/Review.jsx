import React from 'react';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import * as dateFns from 'date-fns';
import { useHistory } from 'react-router';

import Text from '../Text';
import theme from '../../theme';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    marginBottom: 10,
    paddingBottom: 10
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  upperContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    paddingBottom: 10
  },
  upperContainerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 13
  },
  upperContainerRight: {
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
  },
  viewRepositoryButton: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5
  },
  deleteRepositoryButton: {
    backgroundColor: theme.colors.error,
    padding: 15,
    borderRadius: 5
  }
});

const Review = ({ review, userReview, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const history = useHistory();
  const parsedDate = dateFns.addDays(dateFns.parseISO(review.createdAt), 1);
  const createdAt = dateFns.format(parsedDate, 'MM/dd/yyyy');

  const onPressViewRepository = (repositoryId) => {
    history.push(`/repository/${repositoryId}`);
  };

  const onPressDeleteRepository = (reviewId) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteReview(reviewId);
              await refetch({
                includeReviews: true
              });
            } catch (error) {
              console.log(error);
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.upperContainerLeft}>
          <Text style={styles.rating} color="primary" fontSize="subheading" fontWeight="bold">
            {review.rating}
          </Text>
        </View>
        <View style={styles.upperContainerRight}>
          <View style={styles.infoContainer}>
            <Text fontSize="subheading" fontWeight="bold">
              {userReview
                ? review.repository.fullName
                : review.user.username}
            </Text>
            <Text color="textSecondary">{createdAt}</Text>
          </View>
          <Text>{review.text}</Text>
        </View>
      </View>
      {userReview ?
        <View style={styles.lowerContainer}>
          <Pressable style={styles.viewRepositoryButton} onPress={() => onPressViewRepository(review.repository.id)}>
            <Text fontSize="subheadign" fontWeight="bold" color="textTertiary">
              View repository
            </Text>
          </Pressable>
          <Pressable style={styles.deleteRepositoryButton} onPress={() => onPressDeleteRepository(review.id)}>
            <Text fontSize="subheadign" fontWeight="bold" color="textTertiary">
              Delete review
            </Text>
          </Pressable>
        </View>
        : null}
    </View>
  );
};

export default Review;