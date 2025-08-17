import { ReactNode } from "react";

export default function BlogLayout(props:{children:ReactNode}) {
  return <>
    <div className='absolute left-0 top-0 bg-[url(/img/background.jpg)] bg-cover bg-[50%_15%] h-screen w-full'>
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-transparent to-[#0b0221]"></div>
    </div>
    {props.children}
  </>
}
