import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <body className="bg-[#101010] w-full h-screen">
        <NavBar/>
            <h1 className="flex w-full h-1/2 text-white text-9xl font-montserrat justify-center align-bottom items-end">
                Paleyontology
            </h1>
          
      </body>
    </main>
    
  );
};
