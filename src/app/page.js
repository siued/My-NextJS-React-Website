import { Inter } from 'next/font/google'
import Head from "next/head";
import Link from "next/link";
import Home_Page from "./home/page.js";
import Header from './Header.js';
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={inter.className}>
        <title>Matej's Website</title>
        <Home_Page />
        </main>
    );
}
