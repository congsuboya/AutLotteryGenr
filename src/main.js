
import { StackNavigator, TabNavigator } from 'react-navigation';

import ChromosphereView from './Chromosphere';
import SuperEnalotto from './SuperEnalotto';
import SelfSetRule from './SelfSetRule';
const MainScreenNavigator = TabNavigator(
    {
        '双色球': { screen: ChromosphereView },
        '大乐透': { screen: SuperEnalotto },
        '自定义': { screen: SelfSetRule }
    }, {
        tabBarOptions: {
            activeTintColor: '#FFD306',
            labelStyle: {
                fontSize: 14,
            },
            style: {
                backgroundColor: '#81c0c0',
            },
        }
    })



export default MainScreenNavigator;