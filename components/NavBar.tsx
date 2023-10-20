import Link from "next/link"

export default function NavBar(){
    return (
        <section className="px-1.5 py-1 bg-slate-600/50 flex justify-between text-white">
            <Link href="/">
                home image
            </Link>
            <section>
                <NavLinks title="Capstone" path=""/>
            </section>
        </section>
    )
}

function NavLinks(props: {title: string, path: string}){
    return (
        <div>
            <Link href={props.path}>
                <h1>
                    {props.title}
                </h1>
            </Link>
        </div>
    )
}