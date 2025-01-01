
const SectionHeading = ({subheading, heading}) => {
  return (
    <div className="my-10 w-4/12 mx-auto text-center">
      <p className="text-orange-500">--- {subheading} ---</p>
      <hr className="border-b-2 w-4/6 mx-auto my-3" />
      <h2 className="text-3xl font-medium uppercase">{heading}</h2>
      <hr className="border-b-2 w-5/6 mx-auto my-3" />
    </div>
  );
};

export default SectionHeading;