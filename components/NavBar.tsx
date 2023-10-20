import Link from "next/link"

export default function NavBar(){
    return (
        <section className="px-4 py-6 bg-slate-600/0 flex justify-center items-center text-white relative">
            <Link href="/" className="absolute left-2">
                <img src="lambda.png" className="h-14 ">
                </img>
            </Link>
            <section className="flex justify-evenly w-full">
                <NavLinks title="Capstone" path=""/>
                <NavLinks title="APCSA" path=""/>
                <NavLinks title="FOOP" path=""/>
                <NavLinks title="APCSP" path=""/>
            </section>
        </section>
    )
}

function NavLinks(props: {title: string, path: string}){
    return (
        <div>
            <Link href={props.path}>
                <h1 className="text-2xl">
                    {props.title}
                </h1>
            </Link>
        </div>
    )
}