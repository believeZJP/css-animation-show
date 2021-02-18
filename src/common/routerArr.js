/**
 * @file: file
 * @author: zhaojianpeng
 * 
 */
// import Test from '../containers/01/index'
// import React from "react";

// import Test2 from '../containers/02/index'
// import Test3 from '../containers/03/index'
// import Test4 from '../containers/04/index'
// import Test5 from '../containers/05/index'
// import Test6 from '../containers/06/index'
// const Test = require('../containers/01/index')

// import Test7 from '../containers/07/index'
// import Test8 from '../containers/08/index'


function importAll (r) {
    return r;
}
//   require.context是重点
const allFiles = importAll(require.context('../containers/', true, /\.js$/));

const routerArr = [
    // {
    //     path: '/01',
    //     title: '按钮文字滑动',
    //     component: Test
    // },
    // {
    //     path: '/02',
    //     title: '矩形旋转加载',
    //     component: Test2
    // },
    // {
    //     path: '/03',
    //     title: '容器厚条纹边框',
    //     component: Test3
    // },
    // {
    //     path: '/04',
    //     title: '金属光泽3D按钮',
    //     component: Test4
    // },
    // {
    //     path: '/05',
    //     title: '立体滑动 toggle 交互控件',
    //     component: Test5
    // },
    // {
    //     path: '/06',
    //     title: '闪闪发光的钻石',
    //     component: Test6
    // },
    // {
    //     path: '/07',
    //     title: '3D文字跑马灯',
    //     // component: Test7
    // },
    // {
    //     path: '/08',
    //     title: '充电动画加载',
    //     // component: Test8
    // },
    // {
    //     path: '/09',
    //     title: '按钮被瞄准交互',
    //     // component: Test8
    // },
    // {
    //     path: '/10',
    //     title: '同心圆弧旋转 loader 特效',
    //     // component: Test8
    // }
];
console.log(routerArr, 'all')
allFiles.keys().forEach((item, index) => {
    // 读取文件中default导出的模块
    let tmpRoute = {}
    let num = (index + 1) > 9 ? index + 1 : '0' + (index + 1);
    console.log(num, '数字')
    const tmpComponentIns = allFiles(`./${num}/index.js`);
    const { default: tmpComponent, title } = tmpComponentIns
    console.log(tmpComponent, '-------')
    // 这个是截取两个//之间的内容
    // const reg = /\/(.+?)\//g
    // 这个是截取./之间的内容
    const reg = /.(.+?)\//g

    // console.log(reg.exec(item))  
    // 这个只能执行一次，再次执行就会是null
    const resRes = reg.exec(item)
    let path = resRes && resRes[1]
    tmpRoute = {
        path,
        title,
        component: tmpComponent
    }
    routerArr.push(tmpRoute)
})

// module.exports = {
//     routerArr: routerArr
// }

export default routerArr