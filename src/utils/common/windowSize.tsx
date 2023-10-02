'use client';
import React, {useEffect, useState} from "react"

export function useWindowWidth() {
    let [width, setWidth] = useState(window.innerWidth);

    const changeWidth = (e: any) => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", changeWidth);
    }) 


    return width;
}

export function useWindowHeight() {
    let [height, setHeight] = useState(window.innerHeight);

    const changeHeight = (e: any) => setHeight(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", changeHeight);
    }) 


    return height;
}

