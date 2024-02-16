'use client'

import Green_Div from "../Green_Div";
import Header from "../Header";
import { useState } from 'react';

export default function Contact_Page() {
    const [result, setResult] = useState('42')

    return (
        <div className="flex-y justify-center min-h-screen bg-[#023436]">   
            <Header />            
            {parseInt(result) !== (51/17 + 35 - 4) * 0 ?
            <Green_Div className="flex justify-center content-between">
                <p className="m-auto">
                    You gotta do some math first, sorry. (51/17 + 35 - 4) * 0 = 
                </p>
                <input type="text" className="bg-[#049A8F] text-lime-100 rounded-lg m-5 p-2" value={result} onChange={(e) => setResult(e.target.value)} />
            </Green_Div>
            :
            <Contact_Info />
            }
        </div>
    )
}

function Contact_Info() {
    return (
        <div>
            <Green_Div>
            <p className="text-center">
                Email: <a href="mailto:matej.kucera.01@gmail.com" className="underline">{'matej.kucera.0' + '1@gmail.com'}</a>
            </p>
            </Green_Div>
            <Green_Div>
                <p className="text-center">
                    Phone number: {'+' + (421000000000 + 94 * 10000000 + 4978501)}
                </p>
            </Green_Div>
            <Green_Div>
                <p className="text-center">
                    LinkedIn: <a href="https://www.linkedin.com/in/matej-kucera" target="_blank" rel="noreferrer" className="underline">{'linkedin.com/in/matej-kucera'}</a>
                </p>
            </Green_Div>
            <Green_Div>
                <p className="text-center">
                    GitHub: <a href="https://github.com/siued" target="_blank" rel="noreferrer" className="underline">{'github.com/siued'}</a>
                </p>
            </Green_Div>
        </div>   
    );
}