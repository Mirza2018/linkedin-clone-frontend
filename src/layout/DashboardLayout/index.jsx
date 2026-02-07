import React from 'react';
import styles from "./index.module.css"

const DasnboardLayout = ({children  }) => {
    return (
      <div className="container">
        <div className={styles.homeContainer}>
          <div className={styles.homeContainer_left}></div>
        </div>
        <div className={styles.homeContainer__feedContainer}>{children}</div>
        <div className={styles.homeContainer__extrecontainer}></div>
      </div>
    );
};

export default DasnboardLayout;  