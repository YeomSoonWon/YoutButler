import {useRecoilState} from "recoil";
import Link from "next/link";
import {userState, userStateTypes} from "@/recoil/atom/userState";
import UserNameInput from "@/components/UserNameInput";
import Map from "@/components/Map";

const Home=()=> {
    return (
        <main>
            Next app - about page
            <h1>Profile</h1>
            <UserNameInput/>

            <Link href="/">Back to main</Link>
            <Map/>
        </main>
    )
}

export default Home;
