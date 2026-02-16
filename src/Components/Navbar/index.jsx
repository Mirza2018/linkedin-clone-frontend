import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { reset } from "@/config/redux/reducer/authReducer";
const NavbarComponent = () => {
  const router = useRouter();
  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch();
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
          {authState?.profileFetched && (
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <p>Hey , {authState?.user?.userId?.name}</p>
              <p style={{ fontWeight: "bold", cursor: "pointer" }}>Profile</p>
              <p
                onClick={() => {
                  localStorage.removeItem("token");
                  router.push("/login");
                  dispatch(reset());
                }}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Logout
              </p>
            </div>
          )}
          {!authState?.profileFetched && (
            <div
              onClick={() => {
                router.push("/login");
              }}
              className={styles.buttonJoin}
            >
              <p>Be a part</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
