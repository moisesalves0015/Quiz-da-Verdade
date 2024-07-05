import React, { useEffect, useRef } from "react";
import "./Frases.css";

const Frases = () => {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  const textArray = ["Nunca Mais!", "silencia.", "silencia.", "nunca mais!"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container">
      <p>
        Ditadura <span className="typed-text" ref={typedTextRef}></span>
        <span className="cursor" ref={cursorRef}>&nbsp;</span>
      </p>
      <h6>Todos os direitos reservados. © Matheus, Moisés e Telles.</h6>
    </div>
  );
};

export default Frases;
