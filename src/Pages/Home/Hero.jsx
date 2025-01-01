import image from '../../assets/home/chef-service.jpg';
const Hero = () => {
  return (
    <div
      className="hero h-[572px] my-16"
      style={{
        backgroundImage: `url("${image}")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center bg-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-semibold text-black uppercase">Bistro Boss</h1>
          <p className="mb-5 text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;