import Container from "@/components/layouts/Container";


const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services That we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-2">
          All our technicians are fully qualified and licensed. Moreover, they
          are incredibly skillfull and proficient in various aspects of computer
          repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-5"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-7"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 sm:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
