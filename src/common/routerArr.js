/**
 * @file: file
 * @author: zhaojianpeng
 * 
 */
// import Test from '../containers/01/index'
import React from "react";

import Test2 from '../containers/02/index'
import Test3 from '../containers/03/index'
import Test4 from '../containers/04/index'
import Test5 from '../containers/05/index'
import Test6 from '../containers/06/index'
const Test = require('../containers/01/index')

// import Test7 from '../containers/07/index'
// import Test8 from '../containers/08/index'


function importAll (r, cb) {
    // r.keys().forEach(r);
    return r;
    // cb(r);
}
  
const allFiles = importAll(require.context('../containers/', true, /\.js$/));
console.log(allFiles, '全部文件')

function aliasedRequire(name) {
    return (typeof __dirname !== undefined ? __dirname : '.') + name
}

// 动态引入组件
function renderDetail(pageType) {
    const loca = '';
    // let dynamicDetail = require(loca)
    let dynamicDetail = aliasedRequire(`../containers/${pageType< 10 ? '0'+(pageType+1) : (pageType+1)}/index`)
    console.log(<dynamicDetail/>, '组件')
    // const OtherComponent = React.lazy(() => import('./OtherComponent'))

    // let dynamicDetail = React.lazy(() => import(loca))
    console.log(dynamicDetail, 'hahaa')
    return dynamicDetail
}

const routerArr = [
    {
        path: '/01',
        title: '按钮文字滑动',
        component: Test
    },
    {
        path: '/02',
        title: '矩形旋转加载',
        component: Test2
    },
    {
        path: '/03',
        title: '容器厚条纹边框',
        component: Test3
    },
    {
        path: '/04',
        title: '金属光泽3D按钮',
        component: Test4
    },
    {
        path: '/05',
        title: '立体滑动 toggle 交互控件',
        component: Test5
    },
    {
        path: '/06',
        title: '闪闪发光的钻石',
        component: Test6
    },
    {
        path: '/07',
        title: '3D文字跑马灯',
        // component: Test7
    },
    {
        path: '/08',
        title: '充电动画加载',
        // component: Test8
    }
];
routerArr.forEach((item, index) => {
    const tmpComponent = allFiles(`./0${index + 1}/index.js`).default
    console.log(tmpComponent, '-------')
    item.component = tmpComponent
})

// module.exports = {
//     routerArr: routerArr
// }

export default routerArr