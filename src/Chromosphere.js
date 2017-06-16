
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
const emptyRedNum = List(['?', '?', '?', '?', '?', '?']);


class Chromosphere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redNum: emptyRedNum,
            blueNum: '?',
        }
        this.produceNum = this.produceNum.bind(this);
    }



    produceNum(limitNum) {
        let tempRedNum = emptyRedNum;
        let tempNum;
        let tempSureNum = 0;
        while (tempRedNum.filter(item => item != '?').size < 6) {
            tempNum = utils.produceRandomNum(limitNum, tempRedNum);
            tempRedNum = tempRedNum.set(tempSureNum, tempNum);
            tempSureNum = tempSureNum + 1;
        }
        this.setState({
            redNum: tempRedNum,
            blueNum: Math.ceil(Math.random() * 16),
        })
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ position: 'absolute', height: height, width: width }} source={require('../image/backgroudImage.png')}
                    resizeMode={'contain'} />
                <View style={{ alignItems: 'center', justifyContent: 'center', height: 55, width: width, flexDirection: 'row' }}>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', height: 50, width: width - 150, borderColor: 'red', borderRadius: 10,
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                        {utils.renderNumView(this.state.redNum, { color: 'red' })}
                    </View>
                    <View style={{
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        borderColor: 'blue',
                        borderRadius: 10,
                        borderWidth: 1,
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1, fontSize: 15, textAlign: 'center', color: 'blue' }}>{this.state.blueNum}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.produceNum(33)}>
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
                        backgroundColor: '#FFD306'
                    }}>
                        <Text style={{ color: 'white' }}>生成你的号码</Text>
                    </View>
                </TouchableOpacity>

            </View>)
    }
}

export default Chromosphere;