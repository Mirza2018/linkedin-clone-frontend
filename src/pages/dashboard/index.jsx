import { getAboutUser, getAllUsers } from "@/config/redux/action/authAction";
import { getAllPosts } from "@/config/redux/action/postAction";
import DasnboardLayout from "@/layout/DashboardLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import style from "./index.module.css";
import { BASE_URL } from "@/config";

const Dadhboard = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (authState.isTokenThere) {
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem("token") }));
    }
    if (!authState.usersProfileFetched) {
      dispatch(getAllUsers());
    }
  }, [authState.isTokenThere]);

  // if (!authState.profileFetched) {
  //   return
  // }

  return (
    <DasnboardLayout>
      {authState.profileFetched ? (
        <div>
          <div className="scrollComponent">
            <div className={style.createPostContainer}></div>
            <img
              width={100}
              src={`${BASE_URL}/${authState.user.userId.profilePicture}`}
              alt=""
            />
            <textarea name="" id=""></textarea>
            <label htmlFor="fileUpload">
              <div className={style.Fab} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <input type="file" hidden id="fileUpload" />
              </div>
            </label>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </DasnboardLayout>
  );
};

export default Dadhboard;
