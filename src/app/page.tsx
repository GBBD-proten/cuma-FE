"use client";

import SearchBar from "@/components/common/SearchBar";
import Board from "@/components/main/Board";
import MainTitle from "@/components/main/MainTitle";
import apiConfig from "@/config/config";
import { useQuery } from "@tanstack/react-query";

const Main = () => {

    const { data } = useQuery({
        queryKey: ['trend'],
        queryFn: async () => {
            const res = await fetch(`${apiConfig.API_URL}/user`);
            return res.json();
        }
    });

    console.log("data", data);

    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] w-full">
            <MainTitle className="-translate-y-20" />
            <SearchBar />

            <div className="grid grid-cols-2 gap-16 translate-y-10">
                <Board title="인기글" commuity="디시" href="/trend" />
                <Board title="최신글" commuity="오유" href="recent" />
            </div>
        </div>

    )
}

export default Main;