"use client"

import { signOut, useSession } from "next-auth/react";

const NaverLogoutBtn = ()=>{
    const { data: session } = useSession();
    return(
        <button onClick={() => signOut()}>
        Sign Out
        </button>
    )
}

export default NaverLogoutBtn;