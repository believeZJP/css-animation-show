/**
 * @file: file
 * @author: zhaojianpeng
 */
import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
// import { routerArr } from '../common/routerArr'
import routerArr from '../common/routerArr'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" />
            {routerArr.map(item => {
                console.log(item, '实际赋值')
               return  <Route path={item.path} component={item.component} key="index" />
            })}
        </Switch>
    );
}
