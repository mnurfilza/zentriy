export default function Products() {
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="mt-10 mb-10 text-black text-center">
        <div className="font-semibold text-4xl mb-6">
          Produk
        </div>
        <div className="text-sm text-[#101010]">
          Jelajahi beragam paket CCTV kami, cocok untuk rumah dan bisnis kamu
        </div>
      </div>
      <div className="mt-10 mb-10 pb-[4rem] text-black text-center">
        <div className="flex flex-wrap text-sm font-medium text-slate-500">
          <div className="p-1 lg:p-4 w-[50%] lg:w-[50%]">
            <div className="mb-0 lg:mb-10 bg-black p-4 rounded-2xl">
              <div className="flex justify-center mx-auto">
                <img src="../images/cctv-products.svg" alt="integrity" />
              </div>
              <div className="text-white text-center text-xl m-2">Integrity</div>
              <div className="w-[100%] mx-auto lg:w-[50%] pb-2 lg:pb-10">
                <a className="inline-flex justify-center rounded-lg text-xs text-white font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800" href="/documentation">
                  <span>Lihat Lebih Detail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4 w-[50%] lg:w-[50%]">
            <div className="mb-0 lg:mb-10 bg-black p-4 rounded-2xl">
              <div className="flex justify-center mx-auto">
                <img src="../images/cctv-products.svg" alt="Demonstrate" />
              </div>
              <div className="text-white text-center text-xl m-2">Demonstrate</div>
              <div className="w-[100%] mx-auto lg:w-[50%] pb-2 lg:pb-10">
                <a className="inline-flex justify-center rounded-lg text-xs text-white font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800" href="/documentation">
                  <span>Lihat Lebih Detail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4 w-[50%] lg:w-[50%]">
            <div className="mb-0 lg:mb-10 bg-black p-4 rounded-2xl">
              <div className="flex justify-center mx-auto">
                <img src="../images/cctv-products.svg" alt="Diversity" />
              </div>
              <div className="text-white text-center text-xl m-2">Diversity</div>
              <div className="w-[100%] mx-auto lg:w-[50%] pb-2 lg:pb-10">
                <a className="inline-flex justify-center rounded-lg text-xs text-white font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800" href="/documentation">
                  <span>Lihat Lebih Detail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4 w-[50%] lg:w-[50%]">
            <div className="mb-0 lg:mb-10 bg-black p-4 rounded-2xl">
              <div className="flex justify-center mx-auto">
                <img src="../images/cctv-products.svg" alt="Teamwork" />
              </div>
              <div className="text-white text-center text-xl m-2">Teamwork</div>
              <div className="w-[100%] mx-auto lg:w-[50%] pb-2 lg:pb-10">
                <a className="inline-flex justify-center rounded-lg text-xs text-white font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800" href="/documentation">
                  <span>Lihat Lebih Detail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
