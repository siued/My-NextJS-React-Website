import Image from 'next/image';
import Project_List from './Project_List';
import * as React from 'react';
import Link from 'next/link';
import Header from './Header';
import { Inter } from 'next/font/google'
import Green_Div from './Green_Div';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={inter.className}>
            <title>Matej&apos;s Website</title>
            <Home_Page />
        </main>
    );
}

function Home_Page() {
    return (
        <div className="bg-[#023436] min-h-screen">
            <Header />
            <h1 className="text-4xl text-right bg-[#260F26] p-10 rounded-lg">Matej Kučera</h1>
            <div className="flex-y justify-center">
                <Green_Div className="mr-40">
                    <p>
                        Welcome to my website! I am a Master&apos;s student at the University of Groningen studying Computing Science on the Intelligent Systems and Visual Computing track. 
                        I am enthusiastic about developments in AI and ML and I&apos;m always up for a challenge. To find out more about me, check out my projects below or visit my LinkedIn and Github profiles.
                    </p>
                </Green_Div>
                <Green_Div className="ml-40">
                    <a href="https://www.linkedin.com/in/matej-kucera" target="_blank" rel="noreferrer" className="flex items-center justify-between align-middle mt-auto text-3xl underline">
                        My LinkedIn profile
                        <Image src="/LI-In-bug.png" alt="LinkedIn logo" width={63} height={54} className="m-5"/>
                    </a>
                </Green_Div>
                <Green_Div className="ml-40">
                    <a href="https://github.com/siued" target="_blank" rel="noreferrer" className="flex items-center justify-between align-middle mt-auto text-3xl underline">
                        My GitHub profile
                        <Image src="/github-mark-white.png" alt="GitHub logo" width={63} height={54} className="m-5"/>
                    </a>
                </Green_Div>
                <Green_Div className="mr-40">
                    <p>
                        Here&apos;s a list of some projects I have worked on recently:
                    </p>
                    <Project_List />
                    <p>
                        A preview of a chatbot I made using OpenAI&apos;s GPT-3 model can be found <Link href="/chat"><u>here</u></Link>.
                    </p>
                </Green_Div>

            </div>
        </div>
    );
}