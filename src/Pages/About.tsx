const About = () => {
  return (
    <section className="text-black py-10">
      <div className="container">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center max-w-screen-xl">
          <div className="md:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left md:p-4 z-20">
            <h1 className="text-2xl md:text-4xl mb-4 font-serif font-bold relative text-[#170058]">
              <div className="flex items-center text-[#03C988]">
                Selamat Datang
                <img
                  className="ml-2 p-1 inline"
                  src="/garis.svg"
                  alt="Garis About Us"
                />
              </div>
              <div>di Enheal Sychology</div>
            </h1>
            <p className="mb-5 text-sm md:text-xl leading-relaxed text-justify md:text-left">
              Enheal Sychology merupakan sebuah website yang dimana dapat
              membantumu dalam menyelesaikan sebuah masalah dan berisi dengan
              beberapa pengetahuan tentang betapa pentingnya menjaga kesehatan
              mental.
            </p>
          </div>
          <div className="mb-5 lg:mb-0 z-20">
            <img className="object-cover" alt="hero" src="/about.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
