import Link from "next/link";
import styles from "./Navbar.module.css";

const NavItem = ({ title, link, isActive }) => {
  return (
    <li
      className={`${styles.navbarLinks} ${isActive ? styles.isLinkActive : ""}`}
    >
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavItem;
