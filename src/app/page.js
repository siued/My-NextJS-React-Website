'use client'

import GPT_Page from "./GPT_Page/GPT_Page";
import Home_Page from "./Home/Home_Page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomLink from "./CustomLink";
import dynamic from 'next/dynamic';

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const Home_Page = dynamic(() => import('./Home/Home_Page'), { ssr: false });
    const GPT_Page = dynamic(() => import('./GPT_Page/GPT_Page'), { ssr: false });

    return (
        <main className={inter.className}>
        <Router>
            <nav className="bg-[#39FF14] font-bold h-min flex items-center">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/Contact">Contact</CustomLink>
                <CustomLink to="/chat">GPT-Chat</CustomLink>
            </nav>
            <Routes>
                <Route path="/" element={Home_Page()}/>
                <Route path="/chat" element={GPT_Page()}/>
            </Routes>
        </Router>
        </main>
    );
}
