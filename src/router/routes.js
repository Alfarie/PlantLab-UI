
import ShowData from '../ShowData.vue'
import Summary from '../components/summary/summary.vue'
import Control from '../components/control/control.vue'
import Led from '../components/control/led/led.vue'
import LedAdd from '../components/control/led/add/add.vue'
import LedDisplay from '../components/control/led/display/display.vue'

import Nutrition from '../components/control/nutrition/nutrition.vue'
import CO2 from '../components/control/carbon/carbon.vue'

import Water from '../components/control/water/water.vue'

import Setting from '../components/setting/setting.vue'
import Configuration from '../components/setting/configuration/configuration.vue'

export const routes = [
    {path: '/showdata', name: 'showo-data', component: ShowData},
    {path: '/summary', name: 'summary', component: Summary},
    {path: '/control', name: 'control', component: Control,children: [
        {path: 'led', name: 'led', component: Led, children: [
            {path: 'add', name:'add-led', component: LedAdd},
            {path: 'display', name:'disp-led', component: LedDisplay}
        ]},
        {path: 'nutrition', name: 'nutrition', component: Nutrition},
        {path: 'co2', name: 'co2', component: CO2},
        {path: 'water', name: 'water', component: Water}
    ]},
    {path: '/setting', name: 'setting', component: Setting, children: [
        {path: 'configuration', name: 'configuration', component: Configuration }
    ]},
    {path: '/*', redirect: "/summary"}
]