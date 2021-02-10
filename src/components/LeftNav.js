/**
 * @file: file
 * @author: zhaojianpeng
 */
import React from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import routerArr from '../common/routerArr'
// import { routerArr } from '../common/routerArr'
import './style.css'

export default function Routes() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="nav-con">
            {routerArr.map((item, index) => {
                return <div key={index} className={`nav-item${item.path === location.pathname ? ' active' : ''}`}>
                    <Link to={item.path}>{index+1}. {item.title}</Link>
                </div>
            })}
        </div>
    );
}
