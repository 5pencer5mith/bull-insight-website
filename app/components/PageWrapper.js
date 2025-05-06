import styles from './PageWrapper.module.css';

const PageWrapper = ({ children }) => {
  return(
    <div className={styles.wrappingPager}>
      {children}
    </div>
  );
};

export default PageWrapper;