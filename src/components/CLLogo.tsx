import React from 'react'
import Image from 'next/image'
import logo from "../../public/assets/logo.png"
const CLLogo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" height={50} width={50} placeholder='blur' priority /> 
    </div>
  )
}

export default CLLogo
