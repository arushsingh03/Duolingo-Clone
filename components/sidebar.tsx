import Link from "next/link";
import Image from "next/image";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs"
import {Loader} from "lucide-react"

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type Props ={
    className?: string;
};


export const Sidebar = ({ className }: Props) =>{
return (
    <div className={cn( "flex h-full lg:w-[264px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className,)}>
        <Link href="/learn">
           <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                <Image src="/cartoon.svg" height={50} width={50} alt="cartoon" />
                <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">
                    Lingo 
                </h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="LEARN" href="/learn" iconSrc="/learn.svg"/>
                <SidebarItem label="lEADERBOARD" href="/leaderboard" iconSrc="/leaderboard.svg"/>
                <SidebarItem label="QUESTS" href="/quests" iconSrc="/quests.svg"/>
                <SidebarItem label="SHOP" href="/shop" iconSrc="/shop.svg"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    );
};