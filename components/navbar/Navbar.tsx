import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"


const navItems = [

    {path: "/about", name: "About"},
    {path: "/pricing", name: "Pricing"},
    {path: "/contact", name: "Contact"},
]


export const Navbar = () => {
console.log('NAVBAR CREADOOOOO ************')

  return (
<nav className="flex  bg-blue-800 bg-opacity-30 p-2 m-2 rounded ">

<HomeIcon className="mr-2"/>
<Link href={"/"} className="flex items-center">

<span>HOME</span>
</Link>
<div className="d-flex flex-1"></div>

{
    navItems.map((item) => (
        <Link className="mr-2" href={item.path} key={item.path}>{item.name}</Link>
    ))
}


</nav>
  )
}
