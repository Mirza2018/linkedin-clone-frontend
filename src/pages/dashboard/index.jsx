import { getAboutUser } from "@/config/redux/action/authAction";
import { getAllPosts } from "@/config/redux/action/postAction";
import DasnboardLayout from "@/layout/DashboardLayout";
import UserLayout from "@/layout/UserLayout";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Dadhboard = () => {
  const [isTokenThere, setIsTokenThere] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.replace("/login");
    }
    setIsTokenThere(true);
  });

  useEffect(() => {
    if (isTokenThere) {
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem("token") }));
    }
  }, [isTokenThere]);
  return (
    <UserLayout>
      <DasnboardLayout>
        <div>
          <h1>Dashboard</h1>
        </div>
      </DasnboardLayout>
    </UserLayout>
  );
};

export default Dadhboard;
