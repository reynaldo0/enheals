const Home = () => {
  const bg2: React.CSSProperties = { width: "10%" };
  const bg3: React.CSSProperties = { width: "40%" };
  return (
    <section className="text-white">
      <div className="">
        <img
          className="absolute inset-0 z-10 object-cover object-center w-full h-full md:h-auto"
          src="/bg1.svg"
          alt="Background 1"
        />
        <img
          className="absolute left-0 z-10 top-8 h-96"
          style={bg2}
          src="/bg3.svg"
          alt="Background 2"
        />
        <img
          className="absolute top-0 right-0 z-10 h-full"
          style= {bg3}
          src="/bg2.svg"
          alt="Background 3"
        />
      </div>
      <div className="container">
        <div
          className="container flex flex-col-reverse items-center max-w-screen-xl mx-auto md:px-8 md:flex-row"
        >
          <div
            className="z-20 flex flex-col md:flex-grow md:w-1/2 md:items-start md:text-left md:p-4"
          >
            <h1 className="mb-4 font-serif text-2xl font-bold md:text-4xl">
              Pentingnya Menjaga Kesehatan Mental
            </h1>
            <p
              className="mb-5 text-sm leading-relaxed text-justify md:text-xl md:text-left"
            >
              Kesehatan mental sama pentingnya dengan kesehatan fisik. Mental
              yang sehat akan membuat pikiran menjadi positif sehingga tubuh
              akan berfungsi dengan baik secara emosional, psikologis, sosial
              dan akan mempengaruhi cara berfikir, merasakan, dan berperilaku.
            </p>
            <div className="flex">
              <button
                className="hidden px-6 py-2 text-lg text-white border-0 rounded-full md:inline-flex bg-purple focus:outline-none"
              >
                Selengkapnya
              </button>
            </div>
          </div>
          <div className="z-20 mb-5 lg:mb-0">
            <img className="object-cover" alt="hero" src="/icon1.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home