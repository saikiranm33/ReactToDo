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
import { addToDoTask, deleteToDoTask, updateToDoTask } from '../actions';
import { Constants } from 'expo';



class Home extends React.Component {
  constructor(props) 
  {
    super(props);

    this.updateMyData = this.updateMyData.bind(this);
    this.deleteToDoData = this.deleteToDoData.bind(this);

  }

  state = {
    textChange: '',
  };

 

  handleMyData() {
    if (this.state.textChange.trim() === '') {
      return;
    }

    this.props.addToDoTask(this.state.textChange);

    this.setState({ textChange: '' });
  }

  updateMyData(item) {
    this.props.updateToDoTask(item);
  }

  deleteToDoData(item) {
    this.props.deleteToDoTask(item);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'black' }}>

        <View style={styles.headerContainer}>
          <TextInput
            placeholder="Enter the Text"
            style={styles.textInputStyle}
            value={this.state.textChange}
            onChangeText={text => this.setState({ textChange: text })}
          />
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={() => this.handleMyData()}>
            <Image
                  style={styles.imageStyle}
                  source={require('../Images/plus-button.png')}
                />
          </TouchableOpacity>
        </View>

        <MyFlatList todos =  {this.props.todos} viewFrom = "Home" updateList = {this.updateMyData}   deleteData = {this.deleteToDoData} />

    
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    todos: state.todosList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDoTask: todoName =>
      dispatch({
        type: 'ADD_TODO',
        payload: todoName,
      }),
    updateToDoTask: item =>
      dispatch({
        type: 'COMPLETED_TASK',
        payload: item,
      }),

    deleteToDoTask: item =>
      dispatch({
        type: 'DELETE_TASK',
        payload: item,
      }),
  };
}

export default connect(
  mapStateToProps,
  { addToDoTask, deleteToDoTask, updateToDoTask }
)(Home);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:Constants.statusBarHeight,
    height: 60,
  },
  textInputStyle:{
   flex:2,
   paddingLeft:20,
   color:"white",
   fontSize:18,
  },
  addButtonStyle :{

    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
imageStyle:{

width: 30, 
height: 30,

  }

 
});
