# 项目目的

从[css每日挑战](https://github.com/comehope/front-end-daily-challenges)里的效果通过这个项目都实现

[SegmentFault地址](https://segmentfault.com/blog/comehope?page=10)

## 解决css module的问题

将css命名由原来的`style.css`改为`style.module.css`

在js中引入css的时候由原来`import './style.css';`改为`import styles from './style.module.css';`

在用样式的时候用`<div className={styles.box}>`
