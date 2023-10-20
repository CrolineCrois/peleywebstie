import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <body className="bg-[#202020] w-full h-full">
        <NavBar/>
        <div className="flex h-96">
          <div className="m-auto">
            <h1 className="flex w-full text-white text-6xl font-montserrat justify-center align-middle">
                Paleyontology
            </h1>
          </div>
        </div>
      </body>
    </main>
    
  );
};
