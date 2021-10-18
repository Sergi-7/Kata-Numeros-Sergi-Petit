const Button = ({ text, actionOnclick }) => {
  return <button onClick={actionOnclick}>{text}</button>;
};

export default Button;
