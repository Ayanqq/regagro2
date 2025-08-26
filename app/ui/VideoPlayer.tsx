"use client";
import {useRef, useState} from "react";
import YouTube from "react-youtube";
import Image from "next/image";

export const VideoPlayer = ({text}: { text: string }) => {
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
                    playerVars: {controls: 0},
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
                        src="/images/mobilesection/player2.png"
                        alt="Custom preview"
                        fill
                        className="object-contain"
                    />

                    {/* Кастомная кнопка */}
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div
                            className="bg-orange-500 w-5 h-5 md:w-12 md:h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                            {/* Play-иконка */}
                            <div
                                className="w-0 h-0 border-l-[10px] sm:border-l-[14px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                    </button>
                    {/* Стрелка */}
  {/*                  <div*/}
  {/*                      className={` absolute md:top-[200px] md:left-[345px] top-[125px] left-[215px]`}*/}
  {/*                  >*/}
  {/*                      <svg*/}
  {/*                          className="hidden md:block" // desktop svg*/}
  {/*                          width="33" height="51" viewBox="0 0 33 51" fill="none"*/}
  {/*                          xmlns="http://www.w3.org/2000/svg"*/}
  {/*                      >*/}
  {/*                          <path*/}
  {/*                              d="M27.5 50C40.5 35 23.5562 25.1055 16.9808 29.2217C10.4053 33.338 15.0745 42.5276 7.44618 42.6104C-0.181986 42.6933 -3.72341 28.8453 11.7315 22.765C19.3554 19.7657 20.3157 15.127 19.8842 11.4364C19.4527 7.74577 14.2658 3.77277 11.4686 2.36459M11.4686 2.36459C11.4686 2.36459 15.5625 1.80172 17.3129 1.46543M11.4686 2.36459C11.4686 2.36459 12.962 6.67594 13.3018 7.96026"*/}
  {/*                              stroke="white" strokeMiterlimit="16" strokeLinecap="round"*/}
  {/*                          />*/}
  {/*                      </svg>*/}

  {/*                      <svg*/}
  {/*                          className="block md:hidden" // mobile svg*/}
  {/*                          width="19" height="29" viewBox="0 0 19 29" fill="none"*/}
  {/*                          xmlns="http://www.w3.org/2000/svg"*/}
  {/*                      >*/}
  {/*                          <path*/}
  {/*                              d="M15.6017 28.1622C22.7589 19.904 13.4305 14.4566 9.8104 16.7228C6.1903 18.989 8.76093 24.0483 4.56119 24.0939C0.361515 24.1396 -1.58824 16.5156 6.92044 13.1681C11.1177 11.5168 11.6464 8.96303 11.4089 6.93118C11.1713 4.89931 8.31567 2.71199 6.7757 1.93672M6.7757 1.93672C6.7757 1.93672 8.84661 1.26952 9.81028 1.08437M6.7757 1.93672C6.7757 1.93672 7.66829 4.87734 7.85538 5.58442"*/}
  {/*                              stroke="white" strokeWidth="0.5" strokeMiterlimit="16" strokeLinecap="round"*/}
  {/*                          />*/}
  {/*                      </svg>*/}
  {/*                  </div>*/}

  {/*                  /!* Подпись *!/*/}
  {/*                  <div*/}
  {/*                      className={`*/}
  {/*  absolute */}
  {/*  max-w-[145px] md:max-w-[215px] */}
  {/*  top-[155px] left-[230px] */}
  {/*  md:top-[250px] md:left-[350px] */}
  {/*  leading-[10px] md:leading-[12px]*/}
  {/*`}*/}
  {/*                  >*/}
  {/*<span className="font-normal md:font-medium text-[10px] md:text-[12px] text-white">*/}
  {/*  {text}*/}
  {/*</span>*/}
  {/*                  </div>*/}

                </div>
            )}
        </div>
    );
};
