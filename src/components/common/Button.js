import "./Button.scss";

const Button = ({ text, onClick, href }) => {
  return (
    <>
      <a className="btn-primary link" href={href} rel="noreferrer" onClick={onClick}>
        {text}
      </a>
    </>
  );
};

export default Button;
