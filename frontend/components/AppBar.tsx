"use client";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

const AppBar = () => {
  const {data:session, status} = useSession();
  useEffect(()=>{
    if(!session) return;
    console.log(session);
  },[session])

  const ultSignOut=()=>{
    signOut();
  }

  return (
    <div>
      <Link href={"/"}>
        Home
      </Link>
      <div>
        {session?.user ? (
          <>
            <img
              src={session.user.image || ""}
            />
            <p> {session.user.name}</p>
            <button onClick={() => signOut()}>
              Sign Out
            </button>
            <button onClick={() => ultSignOut()}>
              Ult Sign Out
            </button>
          </>
        ) : (
          <div>
          <button onClick={() => signIn("naver")}>
            Naver SignIn
          </button>
          <button onClick={() => signIn("kakao")}>
          Kakao SignIn
        </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;