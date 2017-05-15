import React, {Component} from 'React';
import {CardSection} from './common/CardSection';
import {connect} from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
  } from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate () {
    LayoutAnimation.spring();
  }
  renderDescription () {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <CardSection>
        <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
