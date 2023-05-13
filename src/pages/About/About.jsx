import person from "../../../src/assets/images/about_us/person.jpg"
import parts from "../../../src/assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row">
  <div className="relative w-1/2">
  <img src={person} className="w-3/4 rounded-lg shadow-2xl" />

  <img src={parts} className="absolute w-1/2 border-8 rounded-lg shadow-2xl border-r-white top-1/2 right-5" />
  
  </div>
    <div className="p-4 space-y-5 lg:w-1/2">
      <h1 className="text-3xl font-bold text-orange-500">About us</h1>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.  </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;