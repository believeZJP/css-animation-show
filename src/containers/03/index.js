/**
 * @file: file
 * @author: zhaojianpeng
 */

import React from 'react';

import styles from './style.module.css';
export default class Test extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <p>css</p>
            </div>
        );
    }
}
export const title = '容器厚条纹边框'
