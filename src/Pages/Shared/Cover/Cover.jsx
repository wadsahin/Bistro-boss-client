import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  return (

    <Parallax
      blur={{ min: -30, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[550px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center bg-black bg-opacity-35">
          <div className="max-w-md py-3">
            <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem.
            </p>
          </div>
        </div>
      </div>
    </Parallax>

  );
};

export default Cover;