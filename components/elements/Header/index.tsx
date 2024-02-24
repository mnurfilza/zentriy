export default function Header() {
  return (
    <div className="pb-10 -mt-[5.75rem] md:pb-[5.75rem] md:pt-[5.75rem] dark:bg-gray-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="relative z-20 mx-auto max-w-[50rem] pb-2 pt-16 lg:mx-0 lg:pb-24 lg:pr-4 lg:pt-20 ms:pb-0">
          <p className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl sm:leading-[3.5rem]">
            Keamanan Terbaik untuk Kamu
          </p>
          <p className="mt-4 text-base leading-7 text-white font-thin">
            Bingung dimana membeli dan memasang cctv yang terpercaya? dengan pelayanan yang baik dan bukti nyata, yuk segera hubungi kita.
          </p>
          <div className="mt-8 flex gap-4">
            <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800" href="/documentation">
              <span>Chat Kita <span aria-hidden="true" className="text-white sm:inline">→</span></span>
            </a>
          </div>
        </div>
        <div className="mt-12 mx-auto">
          <img src="../images/cctv.svg" alt="cctv" />
        </div>
      </div>
    </div>
  );
}
