'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Projects",href:"/projects"},{name:"Skills",href:"/skills"},{name:"Résumé",href:"/resume"},{name:"Contact",href:"/contact"}];

export default function Navbar(){
  const pathname=usePathname(); const [open,setOpen]=useState(false); const [dark,setDark]=useState(true);
  useEffect(()=>{setDark(document.documentElement.classList.contains("dark"));setOpen(false)},[pathname]);
  const toggle=()=>{const next=!dark;setDark(next);document.documentElement.classList.toggle("dark",next);localStorage.setItem("theme",next?"dark":"light")};
  return <header className="fixed inset-x-0 top-0 z-50 border-b bg-[var(--nav)] backdrop-blur-md"><nav aria-label="Primary navigation" className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"><Link href="/" className="flex items-center gap-3 font-medium tracking-tight" aria-label="Ritesh Kushwaha, home"><span className="relative h-9 w-9 overflow-hidden border"><Image src="/assets/photo.jpeg" alt="" fill sizes="36px" className="object-cover" /></span><span>Ritesh.</span></Link><div className="hidden items-center gap-1 md:flex">{navigation.filter(item=>item.href!=="/contact").map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined} className={`px-3 py-2 text-sm transition ${pathname===item.href?"text-[var(--accent)]":"muted hover:text-[var(--foreground)]"}`}>{item.name}</Link>)}<Link href="/contact" className="button-primary ml-3 !px-4 !py-2">Get in touch</Link><button onClick={toggle} className="ml-2 grid h-9 w-9 place-items-center border" aria-label={`Switch to ${dark?"light":"dark"} theme`}>{dark?"☀":"☾"}</button></div><div className="flex items-center gap-2 md:hidden"><button onClick={toggle} className="grid h-10 w-10 place-items-center border" aria-label={`Switch to ${dark?"light":"dark"} theme`}>{dark?"☀":"☾"}</button><button onClick={()=>setOpen(!open)} className="grid h-10 w-10 place-items-center border" aria-expanded={open} aria-controls="mobile-menu"><span className="sr-only">Toggle navigation</span><span aria-hidden="true">{open?"×":"☰"}</span></button></div></nav>{open&&<div id="mobile-menu" className="border-t bg-[var(--background)] px-5 py-4 md:hidden">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined} className={`block border-b px-1 py-4 text-base ${pathname===item.href?"text-[var(--accent)]":""}`}>{item.name}</Link>)}</div>}</header>;
}
