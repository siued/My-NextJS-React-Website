'use client'

import { useEffect, useState } from "react";


async function fetchData() {
    let url = 'https://api.github.com/users/siued/repos';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to propagate it
    }
}


export default function Project_List() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let data = fetchData();
        data.then(data => {
        data = Array.from(data);
        data.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        // remove the github profile repository
        data = data.filter(project => project.name !== 'siued');
        setProjects(data);
    });
    }, []);

    return (
        <ul className="text-md underline list-disc pl-20 p-10">
            {projects.map(project => (
                <li key={project.id}>
                    <a href={project.html_url} target="_blank" rel="noreferrer">{project.name} ({project.language})</a>
                </li>
            ))}
        </ul>
    );
}