import { getAboutUser } from "@/config/redux/action/authAction";
import { getAllPosts } from "@/config/redux/action/postAction";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";

const Dadhboard = () => {
  const [isTokenThere, setIsTokenThere] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
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
  return <div>Dashboard</div>;
};

export default Dadhboard;
