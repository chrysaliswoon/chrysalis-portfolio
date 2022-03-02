import "./Button.css"

export default function Button({name}) {
    return (
        <button className="button" role="button">
          {name}
      </button>
    );
  }
  