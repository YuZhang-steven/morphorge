"use client"

import { useEffect } from "react";
import { initializeWindowSizeListener } from "../lib/store/useWindowSizeStore";

export default function HomePageInit() {
    useEffect(() => {
        initializeWindowSizeListener();
    }, []);
    return (
        null
    )
}
