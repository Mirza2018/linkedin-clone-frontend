import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import UserLayout from "@/layout/UserLayout";
export default function Home() {
  const router = useRouter();
  return (
    <UserLayout>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainer_left}>
            <p>Connent with Friends withOut Esaggeration</p>
            <p>
              A pure socal media platfprm , where you can connect with friends,
              with stories no blufs
            </p>
            <div
              onClick={() => {
                router.push("/login");
              }}
              className={styles.buttonJoin}
            >
              <p>Join Now</p>
            </div>
          </div>
          <div className={styles.mainContainer_right}>
            <img src="images/homemain_connection.jpg" alt="" />
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
