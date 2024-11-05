import React from 'react'
import Link from '@docusaurus/Link'
import styles from './CardLink.module.css' // スタイルシートのインポート

const CardLink = ({ title, description, href }) => (
  <div className={styles.card}>
    <Link to={href} className={styles.cardLink}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  </div>
)

export default CardLink
