import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return (
        <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
            <div className="mx-auto max-w-5xl p-4 md:p-8">
                <header>
                    <Link href='/' className='grop'>

                        <div className="inline-flex items-center gap-4">
                            <Image
                                width={120}
                                height={120}
                                src="/images/logo.png"
                                alt="DevPups"
                                className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24"
                            />
                            <p className="text-lg font-semibold">Dev Pups</p>
                        </div>
                    </Link>
                    <div className="mt-6">
                        <h1 className="text-lg font-bold">We&#39;ve got the best puppies!</h1>
                        <p className="text-slate-600">
                            Don&#39;t take our word — let the pictures do the talking :)
                        </p>
                    </div>
                </header>
            </div>
            </main>
    )
}