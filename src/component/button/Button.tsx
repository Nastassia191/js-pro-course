import "./Button.scss"

type PropsType = {
  color: string,
  text?: string,
  handclick: () => void
}

const Button: React.FC<PropsType> = ({
  color,
  text = "click",
  handclick,
}) => {



  return (
    <button className={`button-them _${color}`} onClick={handclick}>
      {text}
    </button>
  )
}

export default Button;