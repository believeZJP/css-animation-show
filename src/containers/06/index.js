/**
 * @file: file
 * @author: zhaojianpeng
 */

import React from 'react'

import styles from './style.module.css'
export default class Test extends React.Component {
  render () {
    return (
        <div>
            <div className={styles.diamond}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
  }
}
export const title = '闪闪发光的钻石'
