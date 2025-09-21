import {puppy} from "../data/puppies";
import FavPuppy from "./favPuppy";

export default function SearchPuppies({puppies, onToggleLike}:{puppies:puppy[], onToggleLike:(id:number)=>void}){
    return (
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
            {/* Search */}
            <div>
                <label htmlFor="search" className="font-medium">
                    Search for a character trait
                </label>
                <div className="mt-2 flex items-center gap-4">
                    <input
                        placeholder="playful..."
                        name="search"
                        id="search"
                        type="text"
                        className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                    <button className="inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-delete"
                        >
                            <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                            <path d="m12 9 6 6" />
                            <path d="m18 9-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Shortlist */}
            <div>
                <h2 className="flex items-center gap-2 font-medium">
                    <span>Your shortlist</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </h2>
                <ul className="mt-4 flex flex-wrap gap-4">
                    {puppies.map((puppy)=>(
                        <FavPuppy image={puppy.imagePath} name={puppy.name} key={puppy.id} onRemove={()=>onToggleLike(puppy.id)} />
                    ))}
                </ul>
            </div>
        </div>
    )
}