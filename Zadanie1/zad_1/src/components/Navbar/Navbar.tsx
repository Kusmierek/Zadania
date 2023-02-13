import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple-200 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            Blog
          </a>
        </div>
        <div
          className={'lg:flex flex-grow items-center'}
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/o-mnie">
                  <span className="ml-2 text-blue-300">O mnie</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/blog">
                  <span className="ml-2 text-blue-300">Blog</span>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to="/">
                  <span className="ml-2 text-blue-300">Main</span>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
