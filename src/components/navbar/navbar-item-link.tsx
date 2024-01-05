"use client"
import Link from "next/link";
import { NavLinkProps } from "./types";
import { usePathname } from "next/navigation";
import styles from './navbar.module.css'

export default function NavbarItemLink({ path, title }: NavLinkProps) {
  const pathName = usePathname()
  return (
    <Link href={path} key={title} className={`${styles.linksContainer } ${pathName === path && styles.active}`}>
        {title}
    </Link>
  )
}
