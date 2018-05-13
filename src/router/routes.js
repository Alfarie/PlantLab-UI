
import ShowData from '../ShowData.vue'
import Summary from '../components/summary/summary.vue'
import Control from '../components/control/control.vue'
import Led from '../components/control/led/led.vue'
import LedAdd from '../components/control/led/add/add.vue'
import LedDisplay from '../components/control/led/display/display.vue'

import Nutrition from '../components/control/nutrition/nutrition.vue'
import Calibration from '../components/control/nutrition/calibration.vue'
import Parameters from '../components/control/nutrition/parameters.vue'
import CO2 from '../components/control/carbon/carbon.vue'

import Water from '../components/control/water/water/water.vue'
import WaterTimer from '../components/control/water/water-timer/water-timer.vue'
import WaterTimerDisplay from '../components/control/water/water-timer/water-timer-display.vue'
import WaterTimerAdd  from '../components/control/water/water-timer/add/add-water-timer.vue'

import Setting from '../components/setting/setting.vue'
import Configuration from '../components/setting/configuration/configuration.vue'
import DateTime from '../components/setting/datetime/datetime.vue'
import Activity from '../components/setting/activity/activity.vue'
import SelectPlant from '../components/setting/activity/selectplant.vue'
import SubmitPlant from '../components/setting/activity/submit.vue'
import Wifi from '../components/setting/wifi/wifi.vue'
import WifiStatus from '../components/setting/wifi/wifi-status.vue'
import WifiList from '../components/setting/wifi/wifi-list.vue'
import WifiConnect from '../components/setting/wifi/wifi-connect.vue'

export const routes = [
    {path: '/showdata', name: 'showo-data', component: ShowData},
    {path: '/summary', name: 'summary', component: Summary},
    {path: '/control', name: 'control', component: Control,children: [
        {path: 'led', name: 'led', component: Led, children: [
            {path: 'add', name:'add-led', component: LedAdd},
            {path: 'display', name:'disp-led', component: LedDisplay}
        ]},
        {path: 'nutrition', name: 'nutrition', component: Nutrition, children: [
            {path: 'cal', name: 'calibration', component: Calibration},
            {path: 'param', name: 'parameters', component: Parameters}
        ]},
        {path: 'co2', name: 'co2', component: CO2},
        {path: 'water', name: 'water', component: Water},
        {path: 'water-timer', name: 'water-timer', component: WaterTimer, children:[
            {path: 'add', name: 'water-timer-add', component: WaterTimerAdd},
            {path: 'display', name: 'water-timer-display', component: WaterTimerDisplay}
        ]}

    ]},
    {path: '/setting', name: 'setting', component: Setting, children: [
        {path: 'configuration', name: 'configuration', component: Configuration },
        {path: 'datetime', name: 'datetime', component: DateTime },
        {path: 'activity', name: 'activity', component: Activity, children:[
            {path: 'select', name: 'select', component: SelectPlant},
            {path: 'submit', name: 'submit', component: SubmitPlant}
        ]},
        {path: 'wifi', name:'wifi', component: Wifi, children:[
            {path: 'list', name: 'wifi-list', component: WifiList},
            {path: 'status', name: 'wifi-stat', component: WifiStatus},
            {path: 'connect', name: 'wifi-connect', component: WifiConnect}
        ]}
    ]},
    {path: '/*', redirect: "/summary"}
]