import PageWrapper from './components/PageWrapper';
import styles from './page.module.css'

export default function home() {
  return(
    <PageWrapper>
      <div className={styles.hero}>
        <div className={styles.heroMessage}>
          <h1>Your Home for a Healthy Herd</h1>
        </div>
        <img className={styles.heroImg} src='/img/hero/test333.jpg' alt='cattle grazing in field with man on a horse'/>
      </div>
    </PageWrapper>
  );  
}