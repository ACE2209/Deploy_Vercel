import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>Project deploy từ git sang vercel để build</p>
      <footer className="justify-center">
        <Image src="/sukuna.png" alt="lỗi ảnh" width={800} height={800} />
      </footer>
    </div>
  );
}
