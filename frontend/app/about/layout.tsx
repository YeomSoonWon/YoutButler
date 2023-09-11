import React from "react";

type Props = {
    children: React.ReactNode,
}
const  AboutLayout=({children}: Props)=> {
    return (
        <div>
            <nav>
                About layout
            </nav>
            {children}
        </div>
    )
}

export default AboutLayout;
