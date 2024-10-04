const Konsultasi = () => {
  return (
    <section>
      <div className="container mx-auto max-w-screen-xl py-10 z-10">
        <p className="text-[#170058] text-4xl font-bold">Konsultasi</p>
        <div className="bg-[#170058] h-1 w-32 mt-2"></div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/about/bg4.svg"
            alt="Background"
          />
        </div>
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-col-reverse md:flex-row max-w-screen-xl">
            <div
              className="md:flex-grow flex flex-col md:items-start md:text-left z-20"
            >
              <h1 className="text-white text-2xl md:text-4xl font-bold py-5">
                Tempat Berkeluh Kesah
              </h1>
              <p
                className="text-white leading-relaxed font-semibold text-lg md:text-xl md:pr-5"
              >
                Isi formulir di bawah ini dengan benar jika kamu ingin melakukan
                konsultasi.
              </p>
              <div className="flex w-full pt-5">
                <span
                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-full"
                >
                  <img
                    className="w-5 h-5 text-gray-500"
                    src="/about/username.svg"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="md:max-w-lg rounded-none rounded-e-full bg-blue-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Masukan Nama"
                />
              </div>
              <div className="flex w-full py-5">
                <span
                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-full"
                >
                  <img
                    className="w-5 h-5 text-gray-500"
                    src="/about/email.svg"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="md:max-w-lg rounded-none rounded-e-full bg-blue-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Masukan Email"
                />
              </div>
              <div className="flex w-full">
                <span
                  className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-full"
                >
                  <img
                    className="w-5 h-5 text-gray-500"
                    src="/about/whatsapp.svg"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  className="md:max-w-lg rounded-none rounded-e-full bg-blue-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="Masukkan Nomor Telepon"
                />
              </div>
              <button
                className="md:inline-flex text-white bg-[#03C988] border-0 py-2 px-10 my-10 focus:outline-none rounded-full text-lg"
              >
                Kirim
              </button>
            </div>
            <div className="mb-5 lg:mb-0 z-20">
              <img
                className="object-cover"
                alt="hero"
                src="/about/konsultasi.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Konsultasi