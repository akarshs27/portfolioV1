import "./Button.scss";

const Button = ({ name, onClick, href }) => {
  return (
    <>
      <a
        className="btn-primary link"
        href={href}
        rel="noreferrer"
        target="_blank"
        onClick={onClick}
      >
        {name}
      </a>
    </>
  );
};

export default Button;
