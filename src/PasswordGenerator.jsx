import React, { useCallback, useEffect, useRef, useState, } from 'react'

export default function PasswordGenerator() {
    const [length, setLength]=useState(8)
    const [number, setNumber] =useState(false);
    const [char, setChar] = useState(false);
    const [password, setPassword]= useState("");
    const passwordRef = useRef(null);

    const copyToClipboard = useCallback(()=>{

        passwordRef.current?.select(password)
        window.navigator.clipboard.writeText(password)
    },
    [password]
    )
    const passwordGenerator = useCallback(
        ()=>{
            let pass = "";
            let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
            if(number) str += "0123456789";
            if (char) str += "`~!@#$%^&*()_+-={}[]"

           for (let i = 1; i <= length; i++) {
            let char = Math.floor (Math.random() * str.length +1);
            pass += str.charAt(char)
           }

           setPassword(pass);

        },
        [length, number, char, setPassword]
    )
    useEffect(()=>{
        passwordGenerator();
    },
    [length, number, char, passwordGenerator]
)
  return (
   <div className='max-w-md bg-slate-500 text-red-700'>
    <h1 className='text-white mx-10'>Password Generator</h1>
    <input 
    className='w-[90%]'
    type="text"
    value={password}
    placeholder='password'
    />
    <button className='bg-black' onClick={copyToClipboard}>Copy</button>
    <br />
    <input 
    type="range"
    min={8}
    max={20}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
     />
    <span>length:{length}</span>
    <input 
    type="checkbox"
    defaultChecked={number}
    readOnly
    onChange={()=>{setNumber((prev) => !prev)}}
     />
    <span>Number</span>
    <input 
    type="checkbox"
    defaultChecked={char}
    readOnly
    onChange={()=>{setChar((prev) => !prev)}}
     />
    <span>Characters</span>

   </div>
  )
}
