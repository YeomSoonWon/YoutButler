"use client"

import { signIn, useSession } from "next-auth/react";

const NaverLoginBtn = ()=>{
    const { data: session } = useSession();
    return(
        <button onClick={() => signIn()}>
        Sign In
        </button>
    )
}

export default NaverLoginBtn;