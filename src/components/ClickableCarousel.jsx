import { useEffect, useState } from "react";

const ClickableCarousel = ({ list }) => {
  const [imageIdx, setImageIdx] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [width, setWidth] = useState(null)

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setWidth('30%')
        setItemsPerPage(3);
      } else if (window.innerWidth >= 910) {
        setWidth('47%')
        setItemsPerPage(2);
      } else {
        setWidth('100%')
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    if (imageIdx - itemsPerPage >= 0) {
      setImageIdx(imageIdx - itemsPerPage);
    }
  };

  const handleNext = () => {
    if (imageIdx + itemsPerPage < list.length) {
      setImageIdx(imageIdx + itemsPerPage);
    }
  };

  return (
    <div className="flex justify-center w-[100%] items-center my-8 ">

      <button onClick={handlePrev} disabled={imageIdx === 0}
        className="h-full px-4 hover:scale-150 hover:cursor-pointer"
      >
        <i className="fa-solid fa-chevron-left text-lg"></i>
      </button>

      <div className="flex justify-between gap-4">
        {list.slice(imageIdx, imageIdx + itemsPerPage).map((img, i) => (
          <img
            key={i}
            className='object-cover h-auto rounded-lg'
            style={{ width }}
            src={img}
            alt={`carousel-${i}`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={imageIdx + itemsPerPage >= list.length}
        className="h-full px-4 hover:scale-150 hover:cursor-pointer"
      >
        <i className="fa-solid fa-chevron-right text-lg"></i>
      </button>
    </div>
  );
};

export default ClickableCarousel;
