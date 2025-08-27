import { useState } from "react";

export default function CustomCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
        <label className="flex items-start gap-[8px] cursor-pointer select-none group">
            {/* скрытый инпут */}
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="hidden"
            />

            {/* кастомный чекбокс */}
            <span
                className={`min-w-[18px] min-h-[18px] flex items-center justify-center rounded transition-colors
          ${
                    checked
                        ? "border-[1.5px] border-[#4F584E] bg-white"
                        : "border border-[#4F584E]/50 bg-white"
                } group-hover:border-[#43764C]`}
            >
                {checked && (
                    <svg
                        width="11"
                        height="8"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 5.5L5 9.5L12 1"
                            stroke="#4F584E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </span>

            {/* текст */}
            <span className="text-[#4F584E]/50 font-normal text-[12px] md:text-[17px] leading-[120%] group">
                I have read the <span className={'underline underline-offset-[4px] decoration-[1px] group-hover:text-[#4F584E]'}>Privacy Policy</span> and agree to the processing of my personal data.
            </span>
        </label>
    );
}
