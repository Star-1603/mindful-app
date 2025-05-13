// components/navbar.tsx
import dynamic from "next/dynamic";

const NavbarClient = dynamic(() => import("./navbar"), { ssr: false });

export default function Navbar() {
  return <NavbarClient />;
}
