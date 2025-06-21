const Header = ({ header, title }) => {
  return (
    <div className="text-white transition-colors duration-300">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-3xl mb-16 p-10 md:p-16 bg-gradient-to-br from-red-600 via-red-500 to-red-700 shadow-xl">
          {/* Decorative animated shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-white opacity-10 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              {header}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-red-100 max-w-2xl mx-auto font-light">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
