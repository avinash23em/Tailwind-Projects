import { Logo } from "../icons/logo";
import base from '../images/illustration-intro.png'

export function Home(){
  return (
    <div>
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
    </div>
  )
}
