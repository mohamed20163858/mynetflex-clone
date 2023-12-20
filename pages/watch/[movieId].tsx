import React from "react";
import useMovie from "@/hooks/useMovie"; 
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";


const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;
    const { data } = useMovie(movieId as string);
    return(
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
            <IoArrowBack className="text-white cursor-pointer" size={40} onClick={() => router.push('/')} />
            <p className="text-white text-1xl md:text-3xl font-bold">
                <span className="font-light">
                    Watching:
                </span>
                {data?.title}
            </p>
            </nav>
            <video className="h-full w-full" controls autoPlay src={data?.videoUrl}>

            </video>

        </div>
    );
}

export default Watch;