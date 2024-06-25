import Link from 'next/link';

export default async function Home() {
    return (
        <div className="grid w-full h-dvh items-center gap-5 place-content-center">
            <h1 className="font-bold text-6xl text-yellow-500">Что бы еще такого послушать?</h1>

            <Link
                href={`/dashboard`}
                className="p-3 w-max justify-self-center transition-colors bg-blue-400 rounded-md"
            >
                Жми сюда и узнаешь
            </Link>
        </div>
    );
}

