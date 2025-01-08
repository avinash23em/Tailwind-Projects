export function Features(){
    const test=[
        {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: "James Fast",
            role: "Senior Developer"
          },
          {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: "Bruce Peterson",
            role: "Marketing Director"
          },
          {
            text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: "Iva Boyd",
            role: "Project Manager"
          }
    ]
    return (
        
        <div  className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-3xl mb-4 text-white">Testimonials</p>
        <div className="grid md:grid-cols-3 gap-8">
    {test.map((test,index)=>(
        <div key={index} className="bg-[#202A3C] p-6 rounded-lg">
            <p className="mb-6 text-sm text-white">{test.text}</p>
            <div>
            <p className="font-bold text-white">{test.author}</p>
            <p className="text-sm text-gray-400">{test.role}</p>
            </div>
        </div>
    ))}
    </div>
        </div>
    )
}