'use client';
import React, {useEffect, useState} from "react"

export function useWindowWidth() {
    let [width, setWidth] = useState(0);

    const changeWidth = (e: any) => setWidth(window.innerWidth);

    useEffect(() => {
        if(window.innerWidth) setWidth(window.innerWidth)
        window.addEventListener("resize", changeWidth);
    }) 


    return width;
}

export function useWindowHeight() {
    let [height, setHeight] = useState(0);

    const changeHeight = (e: any) => setHeight(window.innerHeight);

    useEffect(() => {
        if(window.innerHeight) setHeight(window.innerHeight);
        window.addEventListener("resize", changeHeight);
    }) 


    return height;
}

