'use client'
import { Navbar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";


export default function Navigation({menuLinks}: {menuLinks: [{title:string, url:string}]}){
  return (
    <Navbar>
      <Navbar.Brand>
        <Image src={"/dd-logo.svg"} width="160" height="100" alt="dd-logo"/>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" css={{w:'100%', jc:'center'}}>
      {menuLinks.map(link => <Navbar.Link id={link.title} href={link.url}>{link.title}</Navbar.Link>)}
      </Navbar.Content>
    </Navbar>
  )
}
