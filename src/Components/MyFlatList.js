import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Constants } from 'expo';

class MyFlatList extends React.Component {
  constructor(props) {
    super(props);
  }

  screen = this.props.viewFrom;

  render() {
    console.log(this.screen);

    return (
      <View style={styles.flatViewStyle}>
        <FlatList
          data={this.props.todos}
          renderItem={({ item, separators }) => (
            <View style={styles.flatListStyle}>
              <Text style={styles.flatTitleStyle}>{item.todoName}</Text>

              {this.screen === 'Home' ? (
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <TouchableOpacity
                    style={styles.textStyles}
                    onPress={() => this.props.updateList(item)}>
                    <Image
                      style={styles.imageStyle}
                      source={
                        item.completed === 'true'
                          ? require('../Images/successTick.png')
                          : require('../Images/unCheckBox@2x.png')
                      }
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.textStyles}
                    onPress={() => {
                      this.props.deleteData(item);
                    }}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../Images/delete.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View />
              )}
            </View>
          )}
        />
      </View>
    );
  }
}

export default MyFlatList;

const styles = StyleSheet.create({
  flatViewStyle: {
    backgroundColor: '#383838',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  flatListStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },

  flatTitleStyle: {
    flex: 3,
    color: 'white',
    alignItems: 'center',
    paddingLeft: 20,
  },

  textStyles: {
    flex: 1,
  },

  imageStyle: {
    width: 25,
    height: 25,
  },
});
