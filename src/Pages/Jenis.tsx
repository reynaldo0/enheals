const Jenis = () => {
  return (
    <section>
      <div className="container">
        <div className="py-10 md:pt-80 lg:pt-96 text-center">
          <p className="text-[#170058] text-3xl font-bold">Jenis Masalah</p>
          <p className="text-[#383838] pt-5 text-xl">
            Pilihlah jenis masalah yang sedang kamu hadapi
          </p>

          <div className="container max-w-screen-xl grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-10 pt-10 place-content-center items-center mx-auto">
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image1.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Pembullyan
                  </h5>
                </a>
              </div>
            </div>
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image 2.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Hubungan Percintaan
                  </h5>
                </a>
              </div>
            </div>
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image3.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Konflik Keluarga
                  </h5>
                </a>
              </div>
            </div>
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image4.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Depresi
                  </h5>
                </a>
              </div>
            </div>
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image5.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Kecemasan Berlebihan
                  </h5>
                </a>
              </div>
            </div>
            <div className="w-full max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img className="px-8" src="/jenis/Rectangle 26.svg" alt="" />
              <a href="#">
                <img className="p-8 rounded-t-lg" src="/jenis/image6.svg" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Seksualitas
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default Jenis;
