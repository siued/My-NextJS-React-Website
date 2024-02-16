import { CustomLink } from "./CustomLink.js";

export default function Header () {
    return (
        <header className="p-5 flex align-center bg-[#03B5AA]">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
            <CustomLink href="/chat">GPT-Chat</CustomLink>
        </header>
    );
}