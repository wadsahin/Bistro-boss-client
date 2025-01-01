import featured from '../../assets/home/featured.jpg';
import SectionHeading from '../../Components/common/SectionHeading';
const Featured = () => {
  return (
    <div
      className="hero h-[600px] my-10 bg-fixed"
      style={{
        backgroundImage: `url("${featured}")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">

        <div className="max-w-4xl">
          <div>
            <SectionHeading heading="Featured Items" subheading="Check it Out" />
          </div>
          <div className='flex gap-5'>
            <div className='flex-1'>
              <img src={featured} alt="" />
            </div>
            <div className='flex-1 text-start'>
              <p>January 01, 2025</p>
              <h1 className="text-xl font-bold mb-2">WHERE CAN I GET SOME?</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline border-t-0 border-x-0 border-b-4 text-white font-semibold">READ MORE</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;