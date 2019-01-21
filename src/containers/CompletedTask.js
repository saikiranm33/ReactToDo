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


class CompletedTask extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    textChange: '',
    clickedIndex: '',
  };

 
  render() {

    return (
      <View style={styles.container}>
       <Header title = "COMPLETED TASK">  </Header>
      <MyFlatList todos =  {this.props.completedData} />
      </View>
    );
  }
}



function mapStateToProps(state) {
  return {
    counter: state.counter,
    todos: state.todosList,
    completedData: state.completedList,
  };
}


export default connect(
  mapStateToProps,

)(CompletedTask);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop:Constants.statusBarHeight,
  },
 

});
