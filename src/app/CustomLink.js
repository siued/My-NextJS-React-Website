import Link from 'next/link';

export function CustomLink(props) {
    return (
        <Link href={props.href} className="px-10 py-2 transition-all duration-300 hover:bg-black hover:text-slate-400">
            {props.children}
        </Link>
    );
}
