import React, {Component} from 'React';
import {CardSection} from './common/CardSection';
import {connect} from 'react-redux';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription () {
    const {library, selectedLibraryId} = this.props;
    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }
  render () {
    const {id, title} = this.props.library;
    const {titleStyle} = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
