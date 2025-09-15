import '../assets/carousel.css'

const Carousel = ({list}) => {


    const doubledImgs = [...list,...list, ...list];

     return (
    <div className='outerslider mb-8 md:mb-14 lg:mt-[50px]'>
      <div className="innerslider">
        {doubledImgs.map((img, i) => (
          <div key={i} className='slide'><img src={img} alt="" /></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel