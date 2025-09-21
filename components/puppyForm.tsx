import React, {Dispatch, SetStateAction} from "react";
import {puppy} from "../data/puppies";

interface PuppyFormProps {
    addPuppies: Dispatch<SetStateAction<puppy[]>>
}

export default function PuppyForm({addPuppies}: PuppyFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = String(formData.get('name') ?? '').trim();
        const trait = String(formData.get('trait') ?? '').trim();
        const fileEntry = formData.get('avatar_url');
        const file = fileEntry instanceof File ? fileEntry : null;

        if (!name || !trait) {
            return;
        }

        addPuppies((prevPuppies) => {
            const nextId = prevPuppies.length
                ? Math.max(...prevPuppies.map(p => p.id)) + 1
                : 1;

            const imagePath = file && file.size > 0 ? URL.createObjectURL(file) : "/images/1.jpg";

            return [
                ...prevPuppies,
                {
                    id: nextId,
                    name,
                    vibe: trait,
                    imagePath,
                    liked: false,
                }
            ];
        });
        e.currentTarget.reset();
    }

    return (
        <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
            <form className="mt-4 flex w-full flex-col items-start gap-4" onSubmit={handleSubmit}>
                <div className="grid w-full gap-6 md:grid-cols-3">
                    <fieldset className="flex w-full flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="name"
                            type="text"
                            name="name"
                        />
                    </fieldset>
                    <fieldset className="flex w-full flex-col gap-1">
                        <label htmlFor="trait">Personality trait</label>
                        <input
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="trait"
                            type="text"
                            name="trait"
                        />
                    </fieldset>
                    <fieldset
                        className="col-span-2 flex w-full flex-col gap-1"
                    >
                        <label htmlFor="avatar_url">Profile pic</label>
                        <input
                            className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            id="avatar_url"
                            type="file"
                            name="avatar_url"
                            accept="image/*"
                        />
                    </fieldset>
                </div>
                <button
                    className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    type="submit"
                >
                    Add puppy
                </button>
            </form>
        </div>
    )
}