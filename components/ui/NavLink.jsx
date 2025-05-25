import Link from "next/link";
import styles from "./Navbar.module.css";

const NavLink = ({ title, link, isActive, index }) => {
  return (
    <li
      className={`${styles.navbarLinks} ${isActive ? styles.isLinkActive : ""}`}
    >
      <Link href={link}>
        <span>
          <b>{`0${index + 1}`}</b>
        </span>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
