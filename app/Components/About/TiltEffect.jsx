"use client"
import { useState, useCallback } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

export const TiltEffect = ({label,imageSrc}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="card relative h-52 w-52 rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
       
        <div className=" absolute -inset-1 rounded-lg " />
        <div class="rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
    <div class=" flex flex-col justify-center gap-10 items-center rounded-[calc(1.5rem-1px)] p-10 dark:bg-gray-900">
      
      <div class="text-white font-oswald">
        {label}
      </div>
      <img  src={imageSrc} alt="" width="60px"/>
      
  </div>
  </div>
        
     
      </div>
    </>
  );
};
