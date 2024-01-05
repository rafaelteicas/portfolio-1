"use client"
import { NavLinkProps } from "./types";
import NavbarItemLink from "./navbar-item-link";
import styles from "./navbar.module.css";
import { useState } from "react";

const links: NavLinkProps[] = [
    {
        path: "/",
        title: "Home",
    },
    {
        path: "/contact",
        title: "Contato",
    },
    {
        path: "/about",
        title: "Sobre",
    },
];

// TEMPORARY
const session = true
const isAdmin = true

export default function NavbarLinks() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={styles.links}>
                {links.map(({ path, title }) => (
                    <NavbarItemLink title={title} path={path} key={title} />
                ))}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((current) => !current)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(({ path, title }) => (
                        <NavbarItemLink title={title} path={path} key={title} />
                    ))}
                </div>
            )}
        </div>
    );
}