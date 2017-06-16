
import React from 'react';
import {
    Text,
    Button,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
const { width, height } = Dimensions.get('window');
import { List } from 'immutable';
import * as utils from './utils';
const emptyFrontNum = List(['?', '?', '?', '?', '?']);
const emptyAfterNum = List(['?', '?']);


class SuperEnalotto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            frontNum: emptyFrontNum,
            afterNum: emptyAfterNum,
        }
        this.produceNum = this.produceNum.bind(this);
    }

    produceNum(limitNum) {
        let tempFrontNum = emptyFrontNum;
        let tempAfterNum = emptyAfterNum;
        let tempNum;
        let tempfrontSureNum = 0;
        while (tempFrontNum.filter(item => item != '?').size < 5) {
            tempNum = utils.produceRandomNum(limitNum, tempFrontNum);
            tempFrontNum = tempFrontNum.set(tempfrontSureNum, tempNum);
            tempfrontSureNum = tempfrontSureNum + 1;
        }
        tempfrontSureNum = 0;
        while (tempAfterNum.filter(item => item != '?').size < 2) {
            tempNum = utils.produceRandomNum(12, tempAfterNum);
            tempAfterNum = tempAfterNum.set(tempfrontSureNum, tempNum);
            tempfrontSureNum = tempfrontSureNum + 1;
        }
        this.setState({
            frontNum: tempFrontNum,
            afterNum: tempAfterNum,
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ position: 'absolute', height: height, width: width }} source={require('../image/backgroundtwo.png')}
                    resizeMode={'contain'} />
                <View style={{ alignItems: 'center', justifyContent: 'center', height: 55, width: width, flexDirection: 'row' }}>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', height: 50, width: width - 150, borderColor: '#ff7575', borderRadius: 10,
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                        {utils.renderNumView(this.state.frontNum, { color: '#ff7575' })}
                    </View>
                    <View style={{
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 100,
                        borderColor: '#4a4aff',
                        borderRadius: 10,
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                        {utils.renderNumView(this.state.afterNum, { color: '#4a4aff' })}
                    </View>


                </View>
                <TouchableOpacity onPress={() => this.produceNum(35)}>
                    <View style={{
                        marginTop: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        width: 120,
                        borderColor: '#FFD306',
                        borderWidth: 1,
                        borderRadius: 8,
                        flexDirection: 'row',
                        backgroundColor:'#FFD306'
                    }}>
                        <Text style ={{color:'white'}}>生成你的号码</Text>
                    </View>
                </TouchableOpacity>

            </View>)
    }
}

export default SuperEnalotto;