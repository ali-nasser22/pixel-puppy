'use client'
import SearchPuppies from "./search";
import PuppiesList from "./puppiesList";
import PuppyForm from "./puppyForm";
import {puppies as initialPuppies, puppy} from "../data/puppies";
import {useState, useCallback} from "react";

export default function Main(){
    const [puppies, setPuppies] = useState<puppy[]>(initialPuppies);

    const toggleLike = useCallback((id: number) => {
        setPuppies(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p));
    }, []);

    const favPuppies = puppies.filter((p)=> p.liked);

    return (
        <main>
                <SearchPuppies puppies={favPuppies} onToggleLike={toggleLike} />
                <PuppiesList puppies={puppies} onToggleLike={toggleLike} />
               <PuppyForm/>
        </main>
    )
}