
import logoWhiteImage from '@/images/logo-white.png'
import logoWhiteSmImage from '@/images/logo-sm-white.png'
import logoImage from '@/images/logo.png'
import logoSmImage from '@/images/logo-sm.png'
import Image from 'next/image'

export function Logomark({ className = ""}) {
  return (
   
    <>
      <Image
          className={`${className} dark:hidden`}
          src={logoSmImage}
          alt=""
          width={50}
          height={50}
          unoptimized
          priority
        />
      <Image
          className={`${className} dark:hidden`}
          src={logoWhiteSmImage}
          alt=""
          width={50}
          height={50}
          unoptimized
          priority
        />
      
    </>
  )
}

export function Logo({ className = ""}) {
  return (
    
    <>
      <Image
          className={`${className} dark:hidden`}
          src={logoImage}
          alt=""
          width={230}
          unoptimized
          priority
        />
      <Image
          className={`${className} dark:hidden`}
          src={logoWhiteImage}
          alt=""
          width={230}
          unoptimized
          priority
        />
      
    </>
  )
}
