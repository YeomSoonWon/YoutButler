'use client';
import { SessionProvider } from "next-auth/react";
import {PropsWithChildren} from 'react'

// type Props = ({
//   children: React.ReactNode;
//   });

export default function AuthSession({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}