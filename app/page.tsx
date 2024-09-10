"use client"

import React, { useEffect, useState } from "react";

export default function Page() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (window !== undefined) {
            setIsClient(true)
        }
    }, [])
    
    return (isClient ? <>
        <h1>Hello, Next.js!</h1>
    </> : <></>)
}