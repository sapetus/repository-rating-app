import React from 'react';
import { FlatList, Pressable } from 'react-native';

import RepositoryItem from './RepositoryItem';
import Selection from './Selection';

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <Selection refetch={props.refetch} />
    );
  };

  render() {
    const props = this.props;

    const redirectTo = (id) => {
      props.history.push(`/repository/${id}`);
    };

    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        renderItem={({ item }) => (
          <Pressable onPress={() => redirectTo(item.id)}>
            <RepositoryItem testID="repository" item={item} />
          </Pressable>
        )}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;