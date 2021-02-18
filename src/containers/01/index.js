/**
 * @file: file
 * @author: zhaojianpeng
 */

import React from 'react';

import styles from './style.module.css';
export default class Test extends React.Component {
    render() {
        return (
            <div className={styles.box}>
                <span data-text="B">B</span>
                <span data-text="U">U</span>
                <span data-text="T">T</span>
                <span data-text="T">T</span>
                <span data-text="O">O</span>
                <span data-text="N">N</span>
            </div>
        );
    }
}
export const title = '按钮文字滑动'
