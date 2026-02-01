import UserLayout from "@/layout/UserLayout";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { registerUser } from "@/config/redux/action/authAction";
const LoginComponent = () => {
  const authState = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [userLoginMethod, setUserLoginMethod] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (authState?.loggedIn) {
      router.push("/dashboard");
    }
  });

  const handelRegister = () => {
    console.log("clicked Register");
    
    dispatch(
      registerUser({
        userName,
        name,
        email,
        password,
      }),
    );
  };
  return (
    <UserLayout>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <div className={style.cardContainer__left}>
            <p className={style.cardleft__heading}>
              {userLoginMethod ? "Sign In" : "Sign Up"}
            </p>

            <div className={style.inputContainers}>
              <div className={style.inputRow}>
                <input
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  className={style.inputField}
                  type="text"
                  placeholder="User Name"
                />
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className={style.inputField}
                  type="text"
                  placeholder="Name"
                />
              </div>

              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={style.inputField}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={style.inputField}
                type="password"
                placeholder="***"
              />
              <div
                onClick={() => {
                  if (userLoginMethod) {
                  } else {
                    handelRegister();
                  }
                }}
                className={style.buttonWithOutline}
              >
                <p>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
              </div>
            </div>
          </div>

          <div className={style.cardContainer__right}></div>
        </div>
      </div>
    </UserLayout>
  );
};

export default LoginComponent;
