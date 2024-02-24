export default function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div className="mt-10 mb-10 text-black text-center">
        <div className="font-semibold text-4xl mb-6">
          Tentang Kami
        </div>
        <div className="">
          Kami adalah ahli dalam penyediaan solusi keamanan terbaik. Kami memiliki pengalaman bertahun-tahun dalam instalasi CCTV 
          berkualitas tinggi.
        </div>
        <div className="flex justify-center mt-8 mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zx_GRZf0N_w?si=RMXCjr4p1eDN8VK4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-10 mb-10 text-black text-center">
        <div className="font-semibold text-4xl mb-6">
          Mengapa Kita
        </div>
        <div className="">
          Zentriy bukan hanya pilihan terbaik untuk keamanan kamu, tetapi juga mitra yang dapat kamu percayai.
        </div>
      </div>
      <div className="mt-10 mb-10 pb-[4rem] text-black text-center">
        <div className="flex flex-wrap lg:flex-nowrap text-sm font-medium text-slate-500">
          <div className="w-[50%] lg:w-[100%] mb-10">
            <div className="flex justify-center mx-auto">
              <img src="../images/commitment/integrity.svg" alt="integrity" />
            </div>
            <div className="text-black text-center text-xl m-2">Packages HikVision</div>
            <div className="text-xs w-[100%] mx-auto lg:w-[50%]">Displaying the highest level of Integrity in the way we conduct our business</div>
          </div>
          <div className="w-[50%] lg:w-[100%] mb-10">
            <div className="flex justify-center mx-auto">
              <img src="../images/commitment/demonstrate.svg" alt="integrity" />
            </div>
            <div className="text-black text-center text-xl m-2">Packages HiLook</div>
            <div className="text-xs w-[100%] mx-auto lg:w-[50%]">Demonstrating a strong Will to Win in the market place</div>
          </div>
          <div className="w-[50%] lg:w-[100%] mb-10">
            <div className="flex justify-center mx-auto">
              <img src="../images/commitment/diversity.svg" alt="integrity" />
            </div>
            <div className="text-black text-center text-xl m-2">Packages Dalhua</div>
            <div className="text-xs w-[100%] mx-auto lg:w-[50%]">Promoting Diversity in the work place and community</div>
          </div>
          <div className="w-[50%] lg:w-[100%] mb-10">
            <div className="flex justify-center mx-auto">
              <img src="../images/commitment/teamwork.svg" alt="integrity" />
            </div>
            <div className="text-black text-center text-xl m-2">Packages Ezviz</div>
            <div className="text-xs w-[100%] mx-auto lg:w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen</div>
          </div>
        </div>
      </div>
    </div>
  );
}
