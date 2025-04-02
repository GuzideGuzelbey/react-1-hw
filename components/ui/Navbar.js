"use client";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";
import NavLink from "./NavLink";

const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          {navbarItems.map((item, index) => (
            <NavLink
              key={index}
              title={
                <>
                  <b>{`0${index + 1}`}</b> {item.title}
                </>
              }
              link={item.link}
              isActive={item.link === currentPath}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
