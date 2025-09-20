export type puppy = {
    id:number;
    name: string;
    vibe:string;
    imagePath:string;
    liked:boolean;
}

export const puppies:puppy[] = [
    {
        id:1,
        name: "Frisket",
        vibe: "Mother of all pups",
        imagePath: "/images/1.jpg",
        liked: false,
    },
    {
        id:2,
        name: "Chase",
        vibe: "Very good boi",
        imagePath: "/images/2.jpg",
        liked: true,
    },
    {
        id:3,
        name: "Leia",
        vibe: "Enjoys naps",
        imagePath: "/images/3.jpg",
        liked: true,
    },
    {
        id:4,
        name: "Pupi",
        vibe: "Loves cheese",
        imagePath: "/images/4.jpg",
        liked: false,
    },
    {
        id:5,
        name: "Russ",
        vibe: "Ready to save the world",
        imagePath: "/images/5.jpg",
        liked: false,
    },
    {
        id:6,
        name: "Yoko",
        vibe: "Ready for anything",
        imagePath: "/images/6.jpg",
        liked: false,
    },
];