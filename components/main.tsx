'use client'
import SearchPuppies from "./search";
import PuppiesList from "./puppiesList";
import PuppyForm from "./puppyForm";
import {puppies as initialPuppies, puppy} from "../data/puppies";
import {useCallback, useState} from "react";

export default function Main(){
    const [puppies, setPuppies] = useState<puppy[]>(initialPuppies);

    const toggleLike = useCallback((id: number) => {
        setPuppies(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p));
    }, []);

    const favPuppies = puppies.filter((p)=> p.liked);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPuppies = searchTerm
        ? puppies.filter((p) => p.vibe.toLowerCase().includes(searchTerm.toLowerCase()))
        : puppies;

    return (
        <main>
                <SearchPuppies puppies={favPuppies} onToggleLike={toggleLike} handleSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <PuppiesList puppies={filteredPuppies} onToggleLike={toggleLike} />
               <PuppyForm/>
        </main>
    )
}