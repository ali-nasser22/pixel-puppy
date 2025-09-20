import {puppies} from "../data/puppies";
import PuppyCard from "./puppyCard";

export default function PuppiesList() {
    return (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                puppies.map((puppy) => (
                    <PuppyCard id={puppy.id} name={puppy.name} vibe={puppy.vibe} imagePath={puppy.imagePath} liked={puppy.liked} key={puppy.id}/>
                ))
            }
        </ul>
    )
}