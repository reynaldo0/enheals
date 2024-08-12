const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-opacity-75 border-gray-200 shadow-lg bg-yellow backdrop-blur-lg"
    >
      <nav>
        <div
          className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto"
        >
          <a href="#" className="flex items-center rtl:space-x-reverse">
            <img src="/logo.png" className="h-10" alt="Flowbite Logo" />
            <span
              className="self-center text-2xl font-bold whitespace-nowrap text-[#2C1178]"
              >Enheal</span
            >
          </a>
          <div
            className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              className="px-8 py-2 text-sm font-medium text-center text-white bg-transparent border-2 border-white rounded-full"
            >
              Daftar
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul
              className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-yellow bg-opacity-90 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#2C1178] bg-gray-100 md:bg-transparent hover:text-[#2C1178] rounded50d:bg-transparent"
                  aria-current="page"
                  >Beranda</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 hover:text-[#2C1178] bg-opacity-50 md:hover:bg-transparent md:hover:text-[#2C1178]"
                  >Masalah</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 hover:text-[#2C1178] bg-opacity-50 md:hover:bg-transparent md:hover:text-[#2C1178]"
                  >Tentang Kami</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 hover:text-[#2C1178] bg-opacity-50 md:hover:bg-transparent md:hover:text-[#2C1178]"
                  >Konsultasi</a
                >
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 hover:text-[#2C1178] bg-opacity-50 md:hover:bg-transparent md:bordertext-[#2C1178]ext-blue-700 md:p-0 md:w-auto"
                >
                  Halaman
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-opacity-75 border-gray-200 rounded-lg shadow-lg bg-yellow backdrop-blur-lg w-44"
                >
                  <ul
                    className="py-2 text-sm text-white"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#2C1178]"
                        >Kutipan Kata</a
                      >
                    </li>

                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#2C1178]"
                        >Testimoni</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#2C1178]"
                        >Tim Kami</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar