import { signOut } from "firebase/auth";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import styles from "./styles.module.css";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import "boxicons";

const Header = () => {
  // mendapatkan nama dan profile akun
  const { name, profilePhoto } = useGetUserInfo();

  // logout akan balik ke halaman sign-in
  const navigate = useNavigate();
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // kapital nama
  const capitalizeEachWord = (str) => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <div>
            <h1 className={styles.header__greeting}>
              Hello, {capitalizeEachWord(name)}
            </h1>
            <h3 className={styles.header__desc}>Welcome Back!</h3>
          </div>
          {profilePhoto && (
            <div className={styles.header__right}>
              <img
                src={profilePhoto}
                alt="profile"
                className={styles.header__image}
              />
              <button className={styles.header__button} onClick={signUserOut}>
                Logout
              </button>

              <button className={styles.mobile__button} onClick={signUserOut}>
                <box-icon name="right-arrow-alt" size="lg"></box-icon>
              </button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
