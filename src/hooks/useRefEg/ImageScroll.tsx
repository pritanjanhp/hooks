// clicking the button will scroll an image into view. It uses a ref to the list DOM node, and then calls DOM querySelectorAll API to find the image we want to scroll to.
import React, { useRef } from "react";

const ImageScroll = () => {
//   const listRef = useRef(null);
  const listRef = useRef<HTMLInputElement>(null);

  function scrollToIdx(idx: number) {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[idx];
    imgNode.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
      inline: "center"
    });
  }

  return (
    <>
      <h3>ImageScroll</h3>
      <nav>
        <button onClick={() => scrollToIdx(0)}>Neo</button>
        <button onClick={() => scrollToIdx(1)}>Millie</button>
        <button onClick={() => scrollToIdx(2)}>Bella</button>
      </nav>

      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placecats.com/neo_2/300/200" alt="neo" />
          </li>
          <li>
            <img src="https://placecats.com/millie/300/200" alt="mullie" />
          </li>
          <li>
            <img src="https://placecats.com/bella/300/200" alt="Bella" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ImageScroll;
