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
        <div className="relative w-full aspect-video rounded-[16px] sm:rounded-[24px] overflow-hidden mx-auto">
            {/* YouTube iframe */}
            <YouTube
                videoId="dQw4w9WgXcQ"
                opts={{
                    width: "100%",
                    height: "100%",
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
                        <div className="bg-orange-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            {/* Play-иконка */}
                            <div className="w-0 h-0 border-l-[10px] sm:border-l-[14px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
};
