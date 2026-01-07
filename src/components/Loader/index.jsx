"use client"
import React, { useEffect } from 'react'
import './loader.scss'

export default function Loader() {
  useEffect(() => {
    document.body.scroll(0,0);
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <div id='loader'>
      <div className='loader-box'></div>
    </div>
  )
}
