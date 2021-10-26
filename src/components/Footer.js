const Footer = () => {
  return (
    <div className="">
      <div className="border-t border-gray-800 pb-8"></div>
      <div className="flex justify-center pb-8">
        <h3 className="text-gray-300 font-medium text-sm md:text-lg  flex flex-wrap mx-auto items-center ">
          Designed and Developed with
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500 flex-none ml-2 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          by Akarsh
        </h3>
      </div>
    </div>
  );
};

export default Footer;
