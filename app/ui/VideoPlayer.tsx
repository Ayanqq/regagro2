"use client";
import { useRef, useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

export const VideoPlayer = () => {
    const playerRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onReady = (event: any) => {
        playerRef.current = event.target;
    };

    const handlePlay = () => {
        setIsPlaying(true);
        playerRef.current.playVideo();
    };

    return (
        <div className="relative w-full max-w-[620px] aspect-video rounded-[24px] overflow-hidden ">
            {/* YouTube iframe */}
            <YouTube
                videoId="dQw4w9WgXcQ"
                opts={{
                    width: 620,
                    height: 348,
                    playerVars: { controls: 0 },
                }}
                onReady={onReady}
                className={`absolute top-0 left-0 w-full h-full transition-opacity ${
                    isPlaying ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            />

            {/* Превьюшка */}
            {!isPlaying && (
                <div className="absolute inset-0 z-20">
                    <Image
                        src="/images/mobilesection/player.jpg"
                        alt="Custom preview"
                        fill
                        className="object-cover"
                    />

                    {/* Кастомная кнопка */}
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="bg-orange-500 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            {/* Белый треугольник Play (увеличен для адаптива) */}
                            <div className="w-0 h-0 border-l-8 sm:border-l-12 border-l-white border-t-4 sm:border-t-6 border-t-transparent border-b-4 sm:border-b-6 border-b-transparent ml-1"></div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
};
