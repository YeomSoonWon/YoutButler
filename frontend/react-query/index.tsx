'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PropsWithChildren} from 'react'
import {  ReactNode } from 'react';

// type Props = {
//     children: ReactNode
// }

const queryClient = new QueryClient();

const ReactQuery = ({ children }: PropsWithChildren) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQuery;
