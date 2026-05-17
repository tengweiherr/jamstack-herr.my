import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <p className={`m-0 p-3 ${styles.copyright}`}>
            Designed & Built by <strong className={styles.myName}>Teng Wei Herr</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
