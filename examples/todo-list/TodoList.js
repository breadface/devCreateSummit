import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight,
  Switch,
  TabBarIOS,
} from 'react-native';

let items = ['egg', 'rice', 'beans']

const ListItem  = ({rowData}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
      <Switch style={{marginRight: 20}} value={false}/>
      <Text>{rowData}</Text>
    </View>
  )
}




class TodoList extends Component {
  constructor(props){
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2 })
    this.state = {
      text: "",
      selectedTab: 'incomplete',
    }
  }

  render() {
    let dataSource =  this.ds.cloneWithRows(this.props.items)

    return (
        <View style={styles.listContainer}>
          <ListView
            dataSource={dataSource}
            renderSeparator={(sectionId, rowId) =>
              <View style={{
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: '#000000',
                }}
              />
            }
            renderRow={rowData => <ListItem rowData={rowData}/>}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  listContainer: {
    height: 300,
    // backgroundColor: 'red',
  }
});

export default TodoList
