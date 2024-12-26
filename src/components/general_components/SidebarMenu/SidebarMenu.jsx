
import styles from "./SidebarMenu.module.css";

//* We import our incons:
import { MdHome, MdSettings, MdLiveTv,MdLogout } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

export default function SidebarMenu(){
  return (
    <div className={styles.sidebar}>
    {/* Header Section */}
    <div className={styles.header}>
      <h1 className={styles.title}>OKTV DASHBOARD</h1>
    </div>

    {/* Profile Section */}
    <div className={styles.profile}>
      <img
        src="https://via.placeholder.com/80"
        alt="User Avatar"
        className={styles.avatar}
      />
      <h3 className={styles.username}>Karthi Madesh</h3>
      <p className={styles.role}>Admin</p>
    </div>

    {/* Navigation Section */}
    <nav className={styles.nav}>
      <a href="#home" className={`${styles.navItem} ${styles.active}`}>
        <MdHome className={styles.icon}/> Home
      </a>
      <a href="#channels" className={styles.navItem}>
        <MdLiveTv className={styles.icon}/> Channels
      </a>
      <a href="#report" className={styles.navItem}>
        <HiOutlineDocumentReport className={styles.icon}/> Report
      </a>
      <a href="#settings" className={styles.navItem}>
      <MdSettings className={styles.icon}/>  Settings
      </a>
    </nav>

    {/* Footer Section */}
    <div className={styles.footer}>
      <a href="#logout" className={styles.logout}>
          <MdLogout className={styles.icon}/>  Logout
      </a>
    </div>
  </div>
  );
};

