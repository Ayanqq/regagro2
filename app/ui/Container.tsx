import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-(--container-1320) border-red-500 border-2">
            {children}
        </div>
    );
}
