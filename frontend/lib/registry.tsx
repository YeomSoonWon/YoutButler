"use client";
import useStyledComponentsRegistry from "../lib/styled-components";
import { useServerInsertedHTML } from "next/navigation";
import {PropsWithChildren} from 'react';

export default function RootStyleRegistry({ children}: PropsWithChildren) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

// 'use client'

// import React, { useState } from 'react'
// import { useServerInsertedHTML } from 'next/navigation'
// import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
// import {PropsWithChildren} from 'react'


// export default function StyledComponentsRegistry({ children}: PropsWithChildren) {
//   // Only create stylesheet once with lazy initial state
//   // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
//   const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

//   useServerInsertedHTML(() => {
//     const styles = styledComponentsStyleSheet.getStyleElement()
//     styledComponentsStyleSheet.instance.clearTag()
//     return <>{styles}</>
//   })

//   if (typeof window !== 'undefined') return <>{children}</>

//   return (
//     <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
//       {children}
//     </StyleSheetManager>
//   )
// }