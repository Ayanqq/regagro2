import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {

    return (
        <div className={`max-w-[920px] lg:max-w-[1320px] min-h-[663px] md:h-[777px] mx-auto px-4 md:px-8 relative z-10 ${className ?? ""}`}>
            {children}
        </div>
    );
}
