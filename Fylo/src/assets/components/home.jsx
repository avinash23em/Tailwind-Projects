import { Access } from "../icons/access";
import { Collab } from "../icons/collab";
import { Curvy } from "../icons/curvy";
import { File } from "../icons/file";
import { Logo } from "../icons/logo";
import { Security } from "../icons/security";
import base from '../images/illustration-intro.png'

export function Home(){
  return (
    <div className="h-screen overflow-y-auto bg-purple-800">
      <div className="flex">
        <div className="flex justify-start basis-4/5 p-8">
          <Logo/>
        </div>
        <div className="flex justify-between space-x-1 basis-1/5 p-10">
          <div className="text-white">features</div>
          <div className="text-white">signup</div>
          <div className="text-white">team</div>
        </div>
      </div>
      <div className="grid place-items-center">
      <img 
        src={base} 
        alt="base" 
      />
      </div>
     <div className="container mx-auto px-6 bg-darkbg ">
      <div className="text-center text-white pt-8">
        <h1 className="text-4xl font-serif ">All Your Files in One Secure Location,</h1>
        <h2 className="text-2xl mt-2 font-serif">accesible anywhere</h2>
    <h5>fylo stores files in one location</h5>
    <h5>acces them whenever you need share and collaborate with</h5>
    <h5>with family friends,</h5>
    <button className="rounded-full p-4 w-52 bg-blue-300">Get Started</button>

      </div>
      </div>
      <div className="flex justify-start basis-2/4 ">
        <Access/>
        <Collab/>
        </div>
        <div className="flex justify-start basis-2/4">
        <File/>
        <Security/>
      </div>
    </div>
  )
}
