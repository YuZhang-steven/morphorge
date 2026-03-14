"use client"

import { useEffect } from "react";
import { initializeWindowSizeListener } from "../lib/store/useWindowSize";

export default function HomePageInit() {
    useEffect(() => {
        initializeWindowSizeListener();
    }, []);
    return (
        null
    )
}
