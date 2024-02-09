import Image from 'next/image';
import Project_List from './Project_List';

function Home_Page() {
    Project_List();

    return (
        <div className="bg-[#023436] min-h-screen">
            <h1 className="text-4xl text-right bg-[#260F26] p-10 rounded-lg">Matej Kučera (siued)</h1>
            <div className="flex-y justify-center">
                <p className="p-10 bg-[#037971] rounded-xl text-xl mr-40 m-5">
                    Welcome to my website! I am a Master's student at the University of Groningen studying Computing Science on the Intelligent Systems and Visual Computing track. 
                    I am enthusiastic about developments in AI and ML and I'm always up for a challenge. To find out more about me, check out my projects below or visit my LinkedIn and Github profiles.
                </p>
                <div className="p-10 bg-[#037971] rounded-xl text-xl ml-40 m-5">
                    <a href="https://www.linkedin.com/in/matej-kucera" target="_blank" rel="noreferrer" className="flex items-center justify-between align-middle mt-auto text-3xl underline">
                        My LinkedIn profile
                        <Image src="/LI-In-bug.png" alt="LinkedIn logo" width={63} height={54} className="m-5"/>
                    </a>
                </div>
                <div className="p-10 bg-[#037971] rounded-xl text-xl ml-40 m-5">
                    <a href="https://github.com/siued" target="_blank" rel="noreferrer" className="flex items-center justify-between align-middle mt-auto text-3xl underline">
                        My GitHub profile
                        <Image src="/github-mark-white.png" alt="GitHub logo" width={63} height={54} className="m-5"/>
                    </a>
                </div>
                <div className="p-10 bg-[#037971] rounded-xl text-xl mr-40 m-5">
                    <p>
                        Here's a list of some projects I have worked on recently:
                    </p>
                    {Project_List()}
                </div>

            </div>
        </div>
    )
}

export default Home_Page;