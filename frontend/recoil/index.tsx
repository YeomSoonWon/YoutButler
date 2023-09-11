'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import {PropsWithChildren} from 'react'

// type Props = {
//     children: ReactNode
// }

// const Recoil = ({ children }: Props) => {
//     return <RecoilRoot>{children}</RecoilRoot>
// }

const Recoil = ({ children }: PropsWithChildren) => {
    return <RecoilRoot>{children}</RecoilRoot>
}


export default Recoil;
