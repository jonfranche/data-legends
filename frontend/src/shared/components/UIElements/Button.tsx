import "./Button.css";

interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button">{props.text}</button>;
};

export default Button;