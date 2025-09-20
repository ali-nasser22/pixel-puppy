import {ReactNode} from "react";

type pageWrapperProps = {
    children: ReactNode;
}
export default function PageWrapper({children}:pageWrapperProps){
    return (
        <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
            {children}
        </div>
    )
}