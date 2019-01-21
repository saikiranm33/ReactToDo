import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../Components/Header';
import MyFlatList from '../Components/MyFlatList';
import { connect } from 'react-redux';
import { Constants } from 'expo';

class InCompleteTask extends React.Component {
  constructor(props) {
    super(props);
  }

 
 
  render() {

    return (
      <View style={styles.container}>
      <Header title = "PENDING TASK" >  </Header>
        <MyFlatList todos =  {this.props.incompleteData} viewFrom = "Pending" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    todos: state.todosList,
    completedData: state.completedList,
    incompleteData:state.inCompleteList,
  };
}


export default connect(
  mapStateToProps,
)(InCompleteTask);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
   marginTop:Constants.statusBarHeight,
  },
 


});
