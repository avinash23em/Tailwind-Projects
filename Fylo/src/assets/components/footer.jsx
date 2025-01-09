export default function Footer() {
    return (
      <footer className="bg-[#0B1523] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 mb-8">
            <img src="/logo.svg" alt="Fylo" className="w-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-gray-400">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
            <div>
              <p>+1-543-123-4567</p>
              <p>example@fylo.com</p>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <a href="#" className="block mb-4 hover:text-[#65E2D9]">About Us</a>
                <a href="#" className="block mb-4 hover:text-[#65E2D9]">Jobs</a>
                <a href="#" className="block mb-4 hover:text-[#65E2D9]">Press</a>
                <a href="#" className="block hover:text-[#65E2D9]">Blog</a>
              </div>
              <div>
                <a href="#" className="block mb-4 hover:text-[#65E2D9]">Contact Us</a>
                <a href="#" className="block mb-4 hover:text-[#65E2D9]">Terms</a>
                <a href="#" className="block hover:text-[#65E2D9]">Privacy</a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#65E2D9]">FB</a>
              <a href="#" className="hover:text-[#65E2D9]">TW</a>
              <a href="#" className="hover:text-[#65E2D9]">IG</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  