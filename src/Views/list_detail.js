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


import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Dimensions
} from 'react-native'

import colors from 'HSColors';

import TestCase from './test_case';


const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px * deviceW / basePx
}

const testPoints = [{
  title: '寄存器读写',
  subTask: {
    title: '单地址读写',
    description: '单独修改某地址的寄存器值'
  },
  subTask: {
    title: '单页面修改读写',
    description: '读取写入某一片区的寄存器值'
  },
  subTask: {
    title: '全部读取写入',
    description: '读取写入整个寄存器'
  },
  subTask: {
    title: '保存读取文件',
    description: '从文件写入寄存器、将读取的寄存器值保存为文本'
  }
}, {
  title: '自动ACC',
  description: '连接Ca310设备，完成自动ACC功能'
}];

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

export default class DetailView extends Component {

  // static propTypes = {
  // navigation:React.PropTypes.object.isRequired,
  // ticketTitle: React.PropTypes.string.isRequired,
  // };

  static navigationOptions = ({
    navigation,
    screenProps
  }) => ({
    // headerTitle:navigation.state.params?navigation.state.params.item.title:'工单详情',
    headerTitle: '工单详情',
    headerRight: (
      <Text style={{color:'#FF2500',marginRight:20,marginTop:5,padding:10,fontSize:18}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>确认提交</Text>
    ),

  });

  componentDidMount() {
    // 通过在componentDidMount里面设置setParams将title的值动态修改
    this.props.navigation.setParams({
      navigatePress: this.navigatePress,
    });
  }

  navigatePress = () => {
    alert('点击headerRight');
  }

  state = {
    selectedTab: 'home'
  };


  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="基本信息"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="wpforms" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="wpforms" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home ticketTitle= {this.props.navigation.state.params.item.title}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'testCase'}
          title="待测功能"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'testCase'})}>
          <TestCase ProductName = {this.props.navigation.state.params.item.title}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'configure'}
          title="配置参数"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="cogs" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="cogs" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'configure'})}>
          <Profile ticketTitle= {this.props.navigation.state.params.item.title}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

// DetailView.navigationOptions = ({navigation,screenProps}) => ({
//   // 这里面的属性和App.js的navigationOptions是一样的。
//   // console.log('123');
//   headerTitle:this.props.navigation.state.params?this.props.navigation.state.params.item.title:'Detail1',
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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
