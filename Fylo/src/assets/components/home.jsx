import { Curvy } from "../icons/curvy";
import { Logo } from "../icons/logo";
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
     <div className="h-72 bg-darkbg bg-no-repeat bg-cover">
      <div className="text-center text-white pt-8">
        <h1 className="text-4xl font-serif ">All Your Files in One Secure Location,</h1>
        <h2 className="text-2xl mt-2 font-serif">accesible anywhere</h2>
    <h5>fylo stores files in one location</h5>
    <h5>acces them whenever you need share and collaborate with</h5>
    <h5>with family friends,</h5>
      </div>
      </div>
    </div>
  )
}
