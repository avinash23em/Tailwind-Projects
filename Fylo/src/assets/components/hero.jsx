import { Access } from "../icons/access";
import { Collab } from "../icons/collab";
import { Curvy } from "../icons/curvy";
import { File } from "../icons/file";
import { Logo } from "../icons/logo";
import { Security } from "../icons/security";
import base from '../images/illustration-intro.png'
export default function Hero(){
     const features=[
        {
        title:"Acess yours files anywhere",
        description:"the abiltiy to use smartphone",
        icon:<Access/>
        },
        {
        title: "Security you can trust",
      description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      icon: <Collab/>
    },
    {
      title: "Real-time collaboration",
      description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      icon: <Security/>
    },
    {
      title: "Store any type of file",
      description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      icon: <File/>
    }
     ]
return (
    
<div >
      <div className="text-center text-white pt-8">
        <h1 className="text-4xl font-serif ">All Your Files in One Secure Location,</h1>
        <h2 className="text-2xl mt-2 font-serif">accesible anywhere</h2>
    <h5>fylo stores files in one location</h5>
    <h5>acces them whenever you need share and collaborate with</h5>
    <h5>with family friends,</h5>
    <button className="rounded-full p-4 w-52 bg-blue-300 mt-8">Get Started</button>

      </div>
      <div className=" max-w-6xl mx-auto px-6 py-20">
   <div className="grid md:grid-cols-2 gap-16">
{features.map((features,index)=>(
<div key={index} className="text-center">
    <div className="flex justify-center items-center mb-4">{features.icon}</div>
    <h3 className="text-xl font-bold mb-4 text-white">{features.title}</h3>
    <p className="text-slate-500 ">{features.description}</p>
</div>
))}
   </div>
      </div>


      </div>
      
)
}
