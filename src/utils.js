

import React from 'react';
import {
    View,
    Text
} from 'react-native';


export function produceRandomNum(limitNum,numList) {
    let randomNum = Math.ceil(Math.random() * limitNum);
    while (numList.contains(randomNum)) {
        randomNum = Math.ceil(Math.random() * limitNum);
    }
    return randomNum;
}


export function renderNumView(numList, textStyle = {}) {
    let frontNumViews = [];
    numList.map((item, index) => {
        frontNumViews.push(
            <Text key={index} style={[{ flex: 1, fontSize: 15, textAlign: 'center' }, textStyle]}>{item}</Text>
        )
    });
    return frontNumViews;
}