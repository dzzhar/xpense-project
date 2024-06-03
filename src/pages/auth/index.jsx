import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import image from "../../assets/img/sign-in.svg";
import styles from "./styles.module.css";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.hero__left}>
            <img src={image} alt="Ilustration" className={styles.hero__image} />
          </div>

          <div className={styles.hero__right}>
            <h1 className={styles.hero__title}>
              Transform Your Financial with <span>Our Money Tracker</span>
            </h1>
            <div>
              <button
                className={styles.hero__button}
                onClick={signInWithGoogle}
              >
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
