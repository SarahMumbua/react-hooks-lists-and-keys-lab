import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    const href = `#${link}`; // set href attribute dynamically
    return <a href={href} key={link}>{link}</a>;
  });

  console.log({ linkElements });
  return <nav>{linkElements}</nav>;
}

export default NavBar;

