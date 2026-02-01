import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
const NavbarComponent = () => {
  const router = useRouter();
  return (
    <div className={styles.conteiner}>
      <nav className={styles.navBar}>
        <h1
          onClick={() => {
            router.push("/");
          }}
        >
          Pro Connect
        </h1>

        <div className={styles.navBarOptionContainer}>

 
        <div
          onClick={() => {
            router.push("/login");
          }}
          className={styles.buttonJoin}
        >
          <p>Be a part</p>
        </div>       </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
