import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <body className="bg-[#202020] w-full h-full">
        <h1 className="flex w-full text-white text-6xl font-montserrat">
          Paleyontology
        </h1>
      </body>
    </main>
    
  );
};
