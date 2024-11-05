import React, { useState } from 'react'
export default function InputForm() {
    const [color, setColor] = useState("");
    // const bgBlack =()=>{
    //     setColor("Black")
    // }
    // const bgGreen =()=>{
    //     setColor("Green")
    // }
    // const bgYellow =()=>{
    //     setColor("Yellow")
    // }
    // const bgBlue =()=>{
    //     setColor("Blue")
    // }
    // const bgGray =()=>{
    //     setColor("Gray")
    // }
    // const bgSkyBlue =()=>{
    //     setColor("skyblue")
    // }
    // const bgRed =()=>{
    //     setColor("Red")
    // }


    return (
        <div className="h-[100vh] w-[1200px] duration-1000" style={{ backgroundColor: color }}>
            <div className='flex flex-wrap w-[50%] justify-center bg-slate-50 items-center gap-5 bottom-12 px-5'>
                <button className='bg-black px-5 py-3 ' onClick={()=>{setColor("Black")}}>Black</button>
                <button className='bg-green-900 px-5 py-3 ' onClick={()=>{setColor("Green")}}>Green</button>
                <button className='bg-yellow-400 px-5 py-3 ' onClick={()=>{setColor("Yellow")}}>Yellow</button>
                <button className='bg-blue-800 px-5 py-3 ' onClick={()=>{setColor("Blue")}}>Blue</button>
                <button className='bg-gray-600 px-5 py-3 ' onClick={()=>{setColor("Gray")}}>Gray</button>
                <button className='bg-blue-400 px-5 py-3 'onClick={()=>{setColor("Skyblue")}}>Sky Blue</button>
                <button className='bg-red-600 px-5 py-3 ' onClick={()=>{setColor("Red")}}>Red</button>
    
        </div>
        </div>
    )
}
