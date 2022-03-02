import React from "react";

export default function ContactForm(props) {
  const { formSlug, showSpinner = "1" } = props

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-paperform-id={formSlug}
      data-spinner={showSpinner}
    />
  );
}