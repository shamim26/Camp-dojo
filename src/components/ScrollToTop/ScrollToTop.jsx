import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 280) {
      setVisible(true);
    } else if (scrolled <= 280) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-14 right-10 bg-custom1 p-3 z-10 ${
          visible ? "inline" : "hidden"
        }`}
      >
        <svg viewBox="0 0 448 512" fill="#fff" height="1.5em" width="1.5em">
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
