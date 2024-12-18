// DesktopSidebar.tsx
"use client"
import { CoinsIcon, HomeIcon, Layers2Icon, ShieldCheckIcon, SquareDashedMousePointer } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const routes = [
    {
        href: "",
        label: "Home",
        icon: HomeIcon,
    },
    {
        href: "workflows",
        label: "Workflows",
        icon: Layers2Icon,
    },
    {
        href: "credentials",
        label: "Credentials",
        icon: ShieldCheckIcon,
    },
    {
        href: "billing",
        label: "Billing",
        icon: CoinsIcon,
    },
];

function DesktopSidebar() {
    return (
        <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
            <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4 ">
                <Logo />
            </div>

            {/* Sidebar navigation links */}
            <div className="flex flex-col gap-4 mt-6">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={`/${route.href}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/20 dark:hover:bg-secondary/50 transition"
                    >
                        <route.icon size={20} className="text-primary dark:text-secondary" />
                        <span>{route.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function Logo({
    fontSize = "2xl",
    iconSize = 20
}: {
    fontSize?: string;
    iconSize?: number;
}) {
    return (
        <Link href="/" className={cn(
            "text-2xl font-extrabold flex items-center gap-2",
            fontSize
        )}>
            <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 flex justify-center items-center">
                <SquareDashedMousePointer size={iconSize} className="stroke-white" />
            </div>

            <div>
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                    Flow
                </span>
                <span className='text-stone-700 dark:text-stone-300'>
                    Scrape
                </span>
            </div>
        </Link>
    );
}
export default DesktopSidebar;
