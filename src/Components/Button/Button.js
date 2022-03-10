import buttonStyle from "./button.module.css"

export default function Button({name}) {
    return (
        <button className={buttonStyle.button} role="button">
          {name}
      </button>
    );
  }
  