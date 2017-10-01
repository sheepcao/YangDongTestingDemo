// import React from 'react';
// import { Button, ScrollView,Text } from 'react-native';
//
// const ListsDetails = ({ navigation, banner }) => (
//   // const { passedParam } = navigation.state.params.name;
//   <ScrollView>
//     <Text>{banner}</Text>
//     <Button
//       onPress={() => navigation.navigate('Lists_Detail')}
//       title= {navigation.state.params.item.name.first}
//     />
//     <Button onPress={() => navigation.goBack(null)} title="Go back" />
//   </ScrollView>
// );
//
// export default ListsDetails;


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  static propTypes = {
    ticketTitle: React.PropTypes.string.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.ticketTitle}
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  static propTypes = {
    ticketTitle: React.PropTypes.string.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.ticketTitle}
        </Text>
      </View>
    )
  }
}

export default class TabDemo extends Component {

  static propTypes = {
    navigation:React.PropTypes.object.isRequired,
    ticketTitle: React.PropTypes.string.isRequired,
  };

  state= {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home ticketTitle= {this.props.navigation.state.params.item.title}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile ticketTitle= {this.props.ticketTitle}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
