import {ReactNode} from "react";

type containerProps = {
    children: ReactNode;
}

export default function Container({ children }:containerProps) {
    return (
        <div className='mx-auto max-w-5xl p-4 md:p-8'>
            {children}
        </div>
    );
}