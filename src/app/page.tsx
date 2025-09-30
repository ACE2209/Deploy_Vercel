import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>Project deploy từ git sang vercel để build</p>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <Image
          aria-hidden
          src="/nezuko.png"
          alt="Globe icon"
          width={800}
          height={800}
        />
      </footer>
    </div>
  );
}
