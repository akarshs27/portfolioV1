const Button = ({ name, onClick, href }) => {
  return (
    <a
      className="inline-flex font-bold text-white hover:text-gray-800 border-2 border-gray-200 hover:bg-white py-2 px-6 focus:outline-none rounded text-base md:text-lg transition duration-500 ease-in-out link"
      href={href}
      rel="noreferrer"
      target="_blank"
      onClick={onClick}
    >
      {name}
    </a>
  );
};

export default Button;
