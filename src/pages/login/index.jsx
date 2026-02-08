import UserLayout from "@/layout/UserLayout";
import React, { use, useEffect, useState } from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "@/config/redux/action/authAction";
import { emptyMessage } from "@/config/redux/reducer/authReducer";
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
  }, [authState?.loggedIn, router]);
  useEffect(() => {
    dispatch(emptyMessage());
  }, [userLoginMethod]);
  console.log(authState);

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

  const handleIogin = () => {
    console.log("Clicked login");
    
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
  };
const displayMessage =
  typeof authState?.message === "string"
    ? authState.message
    : authState?.message?.message;
  return (
    <UserLayout>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <div className={style.cardContainer__left}>
            <p className={style.cardleft__heading}>
              {userLoginMethod ? "Sign In" : "Sign Up"}
            </p>
            <p style={{ color: authState.isError ? "red" : "green" }}>
              {displayMessage}
            </p>
            <div className={style.inputContainers}>
              {!userLoginMethod && (
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
              )}

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
                    handleIogin();
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

          <div className={style.cardContainer__right}>
            <div>
              {userLoginMethod ? (
                <p>Don't have an account?</p>
              ) : (
                <p>Already have an account?</p>
              )}

              <div
                onClick={() => {
                  setUserLoginMethod(!userLoginMethod);
                }}
                style={{ color: "black", textAlign: "center" }}
                className={style.buttonWithOutline}
              >
                <p>{!userLoginMethod ? "Sign In" : "Sign UP"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default LoginComponent;
