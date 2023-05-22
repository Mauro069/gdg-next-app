"use client";

import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import styles from "./styles.module.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={open} toggleMenu={toggleMenu} />
      <main
        style={{ width: `calc(100vw - ${open ? "256px" : "92px"})` }}
        className={styles.main}
      >
        {children}
      </main>
    </div>
  );
}
