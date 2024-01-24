"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router= useRouter()
  const[name,user]= useState('asawari')
  const fruits=()=>{
    alert("komal",user('komal'))
  }
  return (
   <main>
      <h1>My Name is {name}</h1>
      <br/>
      <Link href="/productlist">Go to productlist</Link>
      <br/>
      <Link href="login">Go to login Page</Link>
      <br/>
      <Link href= "about">Go to about Page</Link>
      <br/>
      <button onClick= {()=>fruits()}>click me </button>
      <br/>
      <button onClick={()=> router.push("/about")}> Click For About Page </button>
      <br/>
      <button onClick={()=> router.push("/login")}> Click For login Page </button>
      </main>
  );
}
// const User=(props)=>{
//   return(
//   <div>
//     <h2> My name is {props.name}</h2>
//   </div>
//   )
// }
