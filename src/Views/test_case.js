import React, {
  Component
} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  ListView,
  Platform,
  SectionList
} from 'react-native';

import {
  Text,
  Card,
  Icon,
  List,
  ListItem
} from 'react-native-elements';

import colors from 'HSColors';
import fonts from '../config/fonts';


const testPoints = [
  {
    id:"1",
    title: '寄存器读写',
    subTask: [{
      id:"1",
      title: '单地址读写',
      description: '单独修改某地址的寄存器值',
      data:[]
    }, {
      id:"2",
      title: '单页面修改读写',
      description: '读取写入某一片区的寄存器值',
      data:[]
    }, {
      id:"3",
      title: '全部读取写入',
      description: '读取写入整个寄存器',
      data:[]
    }, {
      id:"4",
      title: '保存读取文件',
      description: '从文件写入寄存器、将读取的寄存器值保存为文本',
      data:[]
    },{
      id:"5",
      title: '文件操作',
      data: [{
        id:"1",
        title: '保存文件',
        description: '将文件写入寄存器'
      }, {
        id:"2",
        title: '读取文件',
        description: '将读取的寄存器值保存为文本'
      }]
    }
  ]
  },
  {
    id:"2",
    title: '自动ACC',
    description: '连接Ca310设备，完成自动ACC功能'
  }
];

const testPoints2 = [{
      title: '单地址读写',
      description: '单独修改某地址的寄存器值',
      data:[]
    }, {
      title: '单页面修改读写',
      description: '读取写入某一片区的寄存器值',
      data:[{title:'1'}]
    }, {
      title: '全部读取写入',
      description: '读取写入整个寄存器',
      data:[{title:'1'}]
    }, {
      title: '保存读取文件',
      description: '从文件写入寄存器、将读取的寄存器值保存为文本',
      data:[{title:'1'}]
    },{
      title: 'test',
      data: [{
        title: 'test',
        description: 'sub-test11111'
      }, {
        title: 'test',
        description: 'sub-test22222222'
      }]
    }
  ];

var sections = [
   { title: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
   { title: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
   { title: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
   { title: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
 ];


export default class TestCase extends Component {
  //
  // _sectionComp = (info,index) => {
  //   var sectionInfo = info.section;
  //   return (
  //     <ListItem
  //       roundAvatar = {false}
  //       title={ + '.' + sectionInfo.id + ' ' + sectionInfo.title}
  //       titleStyle = {{fontSize: 16}}
  //       titleNumberOfLines = {2}
  //       subtitle={sectionInfo.description?('功能说明: '+sectionInfo.description):null}
  //       subtitleStyle = {{fontSize:14,color:colors.grey3}}
  //       subtitleNumberOfLines = {2}
  //       containerStyle={{ borderBottomWidth: 0 }}
  //       hideChevron = {true}
  //       // onPress={() => this.props.navigation.navigate('Lists_Detail',{ item: item,headerTitle:'123'} )}
  //     />
  //   )
  // }
  //
  // _renderItem = (info) => {
  // var itemInfo = info.item;
  // var sectionInfo = info.section;
  //
  //   return (
  //     <ListItem
  //       roundAvatar = {false}
  //       title={'2.'+ sectionInfo.id + '.' + itemInfo.id + ' ' + itemInfo.title}
  //       titleStyle = {{fontSize: 16, marginLeft:30}}
  //       titleNumberOfLines = {2}
  //       subtitle={itemInfo.description?('功能说明: '+itemInfo.description):null}
  //       subtitleStyle = {{fontSize:14,color:colors.grey3}}
  //       subtitleNumberOfLines = {2}
  //       containerStyle={{ borderBottomWidth: 0 }}
  //       hideChevron = {true}
  //       // onPress={() => this.props.navigation.navigate('Lists_Detail',{ item: item,headerTitle:'123'} )}
  //     />
  //   )
  // }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "88%",
          backgroundColor: colors.grey4,
          marginLeft: 40
        }}
      />
    );
  };



  renderCardConent(testcase, index) {
    var subtasks = testcase.subTask;
    if (!subtasks) {
      return <Text style={styles.name}>{'功能说明: ' + testcase.description}</Text>
    }

    return (
      <List containerStyle={{marginTop:1, borderTopWidth: 0, borderBottomWidth: 0}}>
        <SectionList
          sections={subtasks}
          // renderSectionHeader={this._sectionComp}
          renderSectionHeader={(info) => (
            <View>
              <ListItem
                roundAvatar = {false}
                title={testcase.id + '.' + info.section.id + ' ' + info.section.title}
                titleStyle = {{fontSize: 17,fontWeight:'600'}}
                titleNumberOfLines = {2}
                subtitle={info.section.description?('功能说明: '+info.section.description):null}
                subtitleStyle = {{fontSize:14,color:colors.grey3}}
                subtitleNumberOfLines = {2}
                containerStyle={{ borderBottomWidth: 0 }}
                hideChevron = {true}
                // onPress={() => this.props.navigation.navigate('Lists_Detail',{ item: item,headerTitle:'123'} )}
              />
                {
                  info.section.description?
                    <View style={{
                        height: 0.5,
                        width: "92%",
                        backgroundColor: colors.grey4,
                        marginLeft: "5%"
                      }}
                    />
                  :null
                }
            </View>
          )}
          renderItem=
          {(info) => (
            <ListItem
              roundAvatar = {false}
              title={testcase.id + '.' + info.section.id + '.' + info.item.id + ' ' + info.item.title}
              titleStyle = {{fontSize: 15.5,fontWeight:'400', marginLeft:35}}
              titleNumberOfLines = {2}
              subtitle={info.item.description?('功能说明: '+info.item.description):null}
              subtitleStyle = {{fontSize:14,color:colors.grey3,marginLeft:35}}
              subtitleNumberOfLines = {2}
              containerStyle={{ borderBottomWidth: 0 }}
              hideChevron = {true}
              // onPress={() => this.props.navigation.navigate('Lists_Detail',{ item: item,headerTitle:'123'} )}
            />
          )}
          keyExtractor={(item,index)=> index}
          ItemSeparatorComponent={this.renderSeparator}
          // SectionSeparatorComponent = {this.renderSeparator}
        />
       </List>
    )
  }


  render() {
    const {
      navigation
    } = this.props;
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>{this.props.ProductName}</Text>
        </View>
        <View>
          {
            testPoints.map((tc, i) => {
              return (
                <Card title={tc.id + '.' + tc.title} titleStyle = {{margin:8,marginBottom:6}}  containerStyle={styles.card_container} dividerStyle= {styles.card_divider}>
                  { this.renderCardConent(tc, i)}
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.secondary,
  },
  heading: {
    color: 'white',
    fontSize: 18,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 6,
    padding:3
  },
  innerCard:{
    // justifyContent: 'center',
    margin:0,
    alignItems: 'stretch',
    flexDirection: 'column',
    marginBottom: 8,
    padding:1,
    // backgroundColor:'red'
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
    marginLeft: '5%',
    marginRight: '5%',
    fontSize:14,
    color:colors.grey3,
    fontWeight:'600',

    // backgroundColor:'yellow'

  },
  card_container: {
    padding: 5,
    margin: 6,
    marginBottom: 10
  },
  card_divider:{
    margin: 10,
    marginTop:1,
    marginBottom:5,
    height:1.5
  }
});
