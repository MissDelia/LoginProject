/**
 * Create by xiongzk
 * 2018-9-10 09:37:54
 */

import React, {Component} from 'react';
import {
    Appregistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';

export default class HomePage extends Component {

    static navigationOptions = {
        header: null,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {selectedTab: 'papular'};
    }

    render() {
        return <View style={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'papular'}
                    title="最热"
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./res/images/ic_popular.png')}></Image>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('./res/images/ic_popular.png')}/>}
                    onPress={() => this.setState({selectedTab: 'papular'})}>

                    <View style={{backgroundColor: '#FF0', flex: 1}}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trending'}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('./res/images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'trending'})}
                    title="趋势">

                    <View style={{backgroundColor: '#0F0', flex: 1}}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'favorite'}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('./res/images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'favorite'})}
                    title="收藏">

                    <View style={{backgroundColor: '#0FF', flex: 1}}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    selectedTitleStyle={{color: '#63B8FF'}}
                    renderIcon={() => <Image style={styles.icon}
                                             source={require('./res/images/ic_my.png')}/>}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon, {tintColor: '#63B8FF'}]}
                               source={require('./res/images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}
                    title="我的">

                    <View style={{backgroundColor: '#FFF', flex: 1}}/>
                </TabNavigator.Item>
            </TabNavigator>
        </View>
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    icon: {
        width: 26,
        height: 26
    }

});