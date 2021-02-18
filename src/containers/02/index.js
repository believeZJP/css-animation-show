/**
 * @file: file
 * @author: zhaojianpeng
 */

import React from 'react';

import './style.css';
export default class Test extends React.Component {
    render() {
        return (
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export const title = '矩形旋转加载'
