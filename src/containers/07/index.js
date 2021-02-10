/**
 * @file: file
 * @author: zhaojianpeng
 */

import React from 'react'

import styles from './style.module.css'
export default class Test extends React.Component {
  render () {
    return (
        <div className={styles.box}>
            <div className={`${styles.inner} ${styles.left}`}>
                <span>Hello World</span>
            </div>
            <div className={`${styles.inner} ${styles.right}`}>
                <span>Hello World</span>
            </div>
        </div>
    )
  }
}
