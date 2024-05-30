"use client";
import { useScroll } from "framer-motion";
import "./Header.css";
import { Home } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const { scrollY } = useScroll();
  const [Opacity, setOpacity] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest < 200) setOpacity(latest / 400);
    });
  }, [scrollY]);

  return (
    <div
      className="HeaderMain"
      style={{
        backgroundColor: `hsla(217, 18%, 14%, ${Opacity})`,
        backdropFilter: `blur(${Opacity * 5}px)`,
      }}
    >
      <p className="LogoSite">NEXTM</p>
      <div className="ListHeader">
        <Link href={"/"}>Movies</Link>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className="SearchHeader">
        <Home />
      </div>
    </div>
  );
}

export default Header;
