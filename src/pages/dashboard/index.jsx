import { getAboutUser, getAllUsers } from "@/config/redux/action/authAction";
import { getAllPosts } from "@/config/redux/action/postAction";
import DasnboardLayout from "@/layout/DashboardLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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

  return (
    <DasnboardLayout>
      <div>
        <h1>Dashboard</h1>
      </div>
    </DasnboardLayout>
  );
};

export default Dadhboard;
