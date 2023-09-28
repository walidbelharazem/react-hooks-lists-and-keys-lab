import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mapLink = links.map((link)=>{
   return <a key = {link} href={`#${link}`}>{link}</a>  
  })
  return <nav>{mapLink}</nav>;
}

export default NavBar;

