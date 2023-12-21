import Parrot from "../../assets/images/parrot.png"
import "./header.css"

export const Header = () => {
  return (
    <header>
      <img src={Parrot} alt="Parrot" className="parrotImage" />
      <div>
      <h1 className="headerText">Polly Glot</h1>
      <p className="headerInfo">Translate your text into any language!</p>
      </div>
    </header>
  )
}

