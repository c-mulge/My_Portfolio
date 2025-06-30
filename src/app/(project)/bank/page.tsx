'use client'

import OnlyBtn from '@/components/Button/Button'
import { Github } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='bg-white h-[100vh] pt-4 flex flex-col justify-center items-center'>
        <div className=' h-[80vh] w-full flex justify-center items-center flex-col p-10'>
        <h1 className='text-black font-bold text-5xl p-4'>GO BANK</h1>
        <div className='bg-[#23A094] p-8 rounded-full shadow-lg text-center border-2 border-black'>
          <div className='bg-orange-500 p-8 rounded-full shadow-lg text-center border-2 border-black'>
            <div className='bg-[#FFC900] text-xl px-16 py-12 text-black uppercase rounded-full border-2 shadow-lg circular-text-block'>
              <p>A simple banking application designed to handle core banking operations such as account creation, transfers, 
              and balance checks. Implemented secure and efficient RESTful APIs with modern tools and best practices. </p>
              <br />
              Successfully managed ACID compliance for database transactions to ensure consistency and reliability. 
            </div>
          </div>
        </div>
      </div>
        <a
          href="https://github.com/siddheshRajendraNimbalkar/bloginigWeb"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          <OnlyBtn className="bg-black text-white cursor-pointer h-[60px] w-[150px] font-bold border-none flex justify-center items-center gap-2 hover:bg-zinc-800 transition">
            <span>GITHUB</span>
            <Github size={18} />
          </OnlyBtn>
        </a>
        </div>
    </>
  )
}

export default page