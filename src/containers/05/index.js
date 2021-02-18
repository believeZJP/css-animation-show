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
            <input type="checkbox" className={styles.toggle} id="toggle"/>
            <label className={styles.switch} htmlFor="toggle">
                <div className={styles.inner}>
                    <div className={styles.disc}></div>
                </div>
            </label>
        </div>
    )
  }
}
export const title = '立体滑动 toggle 交互控件'
