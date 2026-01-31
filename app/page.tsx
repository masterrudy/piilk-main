import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="fixed inset-0 bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        
        {/* 로고 */}
        <Image
          src="/pillk-logo.png"
          alt="Piilk"
          width={120}
          height={48}
          className="mx-auto mb-6"
          priority
        />
        
        {/* 슬로건 */}
        <h1 className="text-[18px] sm:text-[20px] tracking-[0.25em] uppercase font-light">
          Nothing after.
          <br />
          <span className="font-normal">Period.</span>
        </h1>

        {/* Footer - House mark + 제품 카테고리 */}
        <div className="mt-10">
          <p className="text-[9px] tracking-[0.25em] text-zinc-500 uppercase font-medium">
            PIILK™ by ARMORED FRESH
          </p>
          <p className="text-[9px] tracking-[0.15em] text-zinc-500 mt-1 font-medium">
            RTD High Protein Shake.
          </p>
        </div>
      </div>
    </main>
  );
}
