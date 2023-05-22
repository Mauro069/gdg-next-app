import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

interface SidebarButtonProps {
  href: string;
  icon: string;
  text: string;
  isMenuOpen: boolean;
}

export const SidebarButton = ({
  href,
  icon,
  text,
  isMenuOpen,
}: SidebarButtonProps) => (
  <Link href={href} className={styles.sidebarButton}>
    <div className={styles.iconContainer}>
      <Image src={icon} alt={text} height={20} width={20} />
    </div>
    {isMenuOpen && <span>{text}</span>}
  </Link>
);
