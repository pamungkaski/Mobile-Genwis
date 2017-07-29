/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict';

import { StackNavigator } from 'react-navigation'

//Navigators
import DetailNavigation from '../Detail/views/DetailNavigation'

const routeConfiguration = {
    DetailNavigation: { screen: DetailNavigation }
}

export const NavigatorHome = StackNavigator(routeConfiguration)