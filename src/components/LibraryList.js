import React, {Component} from 'React';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryLists extends Component {

  componentWillMount () {
    const listSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });

    this.dataSource = listSource.cloneWithRows(this.props.libraries);
  }

  renderRow (library) {
    return <ListItem library={library} />;
  }
  render () {
    console.log(this.props);
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStatetoProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStatetoProps)(LibraryLists);
