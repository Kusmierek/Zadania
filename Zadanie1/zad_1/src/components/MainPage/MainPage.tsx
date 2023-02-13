import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <section className="">
      <div className="px-6 py-12 md:px-12 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 color: hsl(218, 81%, 95%)">
                Check our Blogs! <br />
              </h1>
              <a
                className="text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                <Link to={`/blog/`}>Blogs posts</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
