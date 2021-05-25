import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import AuthForms from "../components/AuthForms";

export default function Home() {
  const router = useRouter();
  // 'loading' | 'logged-in' | 'logged-out'
  const [authenticationState, setAuthenticationState] =
    React.useState("loading");

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticationState("logged-in");
    } else {
      setAuthenticationState("logged-out");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Instagramo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticationState === "loading" ? (
        "loading"
      ) : authenticationState === "logged-in" ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            router.reload();
          }}
        >
          Log out
        </button>
      ) : (
        <AuthForms />
      )}
    </div>
  );
}
