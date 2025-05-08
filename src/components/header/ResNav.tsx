"use client";

import { useEffect, useState } from "react";
import MobNav from "./MobNav";
import Nav from "./Nav";

export default function Navbar() {
  const [openMobNav, setOpenMobNav] = useState<boolean>(true);

  const handleOpen = () => {
    setOpenMobNav(true);
  };

  const handleClose = () => {
    setOpenMobNav(false);
  };

  useEffect(() => {
    console.log(openMobNav);
  }, [openMobNav]);

  return (
    <>
      <Nav onMenuClick={handleOpen} />
      <MobNav isOpen={openMobNav} onClose={handleClose} />
    </>
  );
}
