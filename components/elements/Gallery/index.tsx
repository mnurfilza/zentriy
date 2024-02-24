export default function Gallery() {
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="mt-10 mb-10 text-black text-center">
        <div className="font-semibold text-4xl mb-6">
          Gallery
        </div>
        <div className="text-sm text-[#101010]">
          Lihat contoh pemasangan CCTV kami sebelumnya.
        </div>
      </div>
      <div className="mt-10 mb-10 pb-[4rem] text-black text-center">
        <img src="../images/gallery.svg" alt="gallery" className="w-[100%]" />
      </div>
    </div>
  );
}
