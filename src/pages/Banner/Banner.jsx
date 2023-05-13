import img01 from '../../../src/assets/images/banner/1.jpg'
import img02 from '../../../src/assets/images/banner/2.jpg'
import img03 from '../../../src/assets/images/banner/3.jpg'
import img04 from '../../../src/assets/images/banner/4.jpg'
// import img05 from '../../../src/assets/images/banner/5.jpg'
// import img06 from '../../../src/assets/images/banner/6.jpg'

const Banner = () => {
    const sliderBtn = <>
     <div className="absolute bottom-0 rounded-xl flex items-center gap-5 text-white  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='pl-12 space-y-7'>
        <h2 className='w-1/2 text-6xl font-bold '>
        Affordable Price For Car Servicing
        </h2>
        <p>
        There are many variations of passages of  available, but the majority have suffered alteration in some form
        </p>
        <div>
        <button className="mr-5 btn btn-primary">Discover more</button>
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
     </div>
    </div>
    </>

    return (
        <div>
            <div className="w-full carousel h-[600px]">
  <div id="slide1" className="relative w-full carousel-item">
    <img src={img01} className="w-full rounded-xl" />
    <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
   {sliderBtn}
  </div> 
  <div id="slide2" className="relative w-full carousel-item">
    <img src={img02} className="w-full rounded-xl" />
    <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
 {sliderBtn}
  </div> 
  <div id="slide3" className="relative w-full carousel-item">
    <img src={img03} className="w-full rounded-xl" />
    <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
   {sliderBtn}
  </div> 
  <div id="slide4" className="relative w-full carousel-item">
    <img src={img04} className="w-full rounded-xl" />
    <div className="absolute bottom-0 flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    {sliderBtn}
  </div>
  {/* <div id="slide4" className="relative w-full carousel-item">
    <img src={img05} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="relative w-full carousel-item">
    <img src={img06} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
        </div>
    );
};

export default Banner;