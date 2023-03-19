import Link from "next/link";
import { Home } from "./icons/Globalicons";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <Home />
            
          </Link>
          <span className="mx-auto">Anime with Mimika </span>
          {""}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>

      <footer className="bg-gray-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2023 Mimika Ackerman
        </div>
      </footer>
    </div>
  );
}
