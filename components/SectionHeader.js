import styles from '../styles/Home.module.css'

export default function SectionHeader ({ title }) {
  return (
    <div className={styles.sectionHeaderContainer}>
      <h2>{title}</h2>
      <hr />
    </div>
  )
}
