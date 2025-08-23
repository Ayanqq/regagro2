import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-[1320px] mx-auto h-full ">
            {children}
        </div>
    );
}
