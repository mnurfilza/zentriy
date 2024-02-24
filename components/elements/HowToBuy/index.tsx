export default function Products() {
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="mt-10 mb-10 text-black text-center">
        <div className="font-semibold text-4xl mb-6">
          Cara Membeli
        </div>
        <div className="text-sm text-[#101010]">
          Mudahnya melakukan pembelian dan pemasangan di zentriy, kamu gak perlu repot semua sudah diurus.
        </div>
      </div>
      <div className="mt-10 mb-2 pb-[2rem] text-black text-center">
        <div className="flex flex-wrap text-slate-500">
          <div className="p-1 lg:p-4 w-[100%] lg:w-[50%]">
            <div className="mb-0 lg:mb-10 p-2 rounded-2xl">
              <img src="../images/how-to-buy.svg" alt="how-to-buy" className="w-[100%] h-[20rem] lg:h-auto" />
            </div>
          </div>
          <div className="mt-6 p-1 lg:p-4 w-[100%] lg:w-[50%] block">
            <div className="font-semibold text-black text-left text-base mb-2">
              1. Pilih Paket dan Harga
            </div>
            <div className="text-xs text-left text-[#101010] w-[100%] lg:w-[60%] mb-10">
              Jelajahi berbagai paket CCTV kami, dan temukan yang cocok untuk kebutuhan kamu. Lihat harga dan fitur yang tersedia
            </div>
            <div className="font-semibold text-black text-left text-base mb-2">
              2. Hubungi Kami Melalui Whatsapp
            </div>
            <div className="text-xs text-left text-[#101010] w-[100%] lg:w-[60%] mb-10">
              Ketika kamu telah memilih paket yang sesuai, hubungi kami melalui WhatsApp.
            </div>
            <div className="font-semibold text-black text-left text-base mb-2">
              3. Proses Pembayaran
            </div>
            <div className="text-xs text-left text-[#101010] w-[100%] lg:w-[60%] mb-10">
              Setelah kamu mengkonfirmasi pesanan kamu melalui WhatsApp, kami akan memandu kamu melalui proses pembayaran yang aman dan nyaman.
            </div>
            <div className="font-semibold text-black text-left text-base mb-2">
              4. Pemasangan Oleh Teknisi Ahli
            </div>
            <div className="text-xs text-left text-[#101010] w-[100%] lg:w-[60%] mb-10">
              Ketika pembayaran telah diterima, tim teknisi ahli kami akan segera memasang sistem CCTV kamu dengan profesionalisme dan ketelitian.
            </div>
            <div className="font-semibold text-black text-left text-base mb-2">
              5.Penyerahan dan Penyelesaian
            </div>
            <div className="text-xs text-left text-[#101010] w-[100%] lg:w-[60%] mb-10">
              Setelah instalasi selesai, kamu akan menerima alat-alat CCTV yang telah dipasang. Kami akan memastikan semuanya berfungsi dengan baik sebelum penyelesaian.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <a className="inline-flex justify-center rounded-3xl text-sm font-normal py-3 px-4 text-blue-700 bg-white border border-solid border-1 border-blue-700" href="/documentation">
            <span>Lihat produk</span>
          </a>
          <a className="inline-flex justify-center rounded-3xl text-sm text-white font-semibold py-3 px-4 bg-blue-700 hover:bg-blue-800 ml-6" href="/documentation">
            <span>Chat dengan kita sekarang</span>
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto bg-[#2196F3] rounded-2xl">
        <div className="relative mx-auto w-[100%] lg:w-[70%] pb-2 pl-4 pr-4 lg:mx-0 lg:pt-2 lg:pl-16 ms:pb-0">
          <p className="mt-4 text-2xl lg:text-4xl font-normal tracking-[-0.04em] text-white sm:text-4xl sm:leading-[3.5rem]">
            Mau konsultasi langsung?
          </p>
          <p className="mt-2 mb-8 text-sm lg:text-base leading-7 text-white font-thin">
            Yuk hubungi kami sekarang untuk konsultasi langsung dengan admin kami
          </p>
        </div>
        <div className="mx-auto mb-4 lg:mb-0">
          <a className="inline-flex justify-center rounded-3xl text-sm font-normal py-3 px-4 text-blue-700 bg-white" href="/documentation">
            <span>Lihat produk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
