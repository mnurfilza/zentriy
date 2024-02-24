import style from "./style.module.css";

export default function Dealers() {
  return (
    <div className={style.root}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
        <div className="mx-6 mt-4 lg:mt-0 text-black lg:block">
          <h4>Authorized Dealer</h4>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center lg:justify-between">
          <div className="mx-2 lg:mx-12">
            <img src="../images/authorized-dealer/image-1.svg" alt="cctv" />
          </div>
          <div className="mx-2 lg:mx-12">
            <img src="../images/authorized-dealer/image-2.svg" alt="cctv" />
          </div>
          <div className="mx-2 lg:mx-12">
            <img src="../images/authorized-dealer/image-3.svg" alt="cctv" />
          </div>
          <div className="mx-2 lg:mx-12">
            <img src="../images/authorized-dealer/image-4.svg" alt="cctv" />
          </div>
          <div className="mx-2 lg:mx-12">
            <img src="../images/authorized-dealer/image-5.svg" alt="cctv" />
          </div>
        </div>
      </div>
    </div>
  );
}
