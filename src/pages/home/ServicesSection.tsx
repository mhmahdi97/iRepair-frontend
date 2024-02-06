import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";
import FreeDiagonistics from "@/components/ServiceTiles/FreeDiagonistics";
import SameDayDelivery from "@/components/ServiceTiles/SameDayDelivery";
import StorageReplacement from "@/components/ServiceTiles/StorageReplacement";
import Container from "@/components/layouts/Container";
import RemoteSupportService from "./RemoteSupportService";


const ServicesSection = () => {
  return (
    <Container className="py-20 mt-28">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Services That we provide.</h1>
        <p className="max-w-[80ch] mt-7 mb-12">
          All our technicians are fully qualified and licensed. Moreover, they
          are incredibly skillfull and proficient in various aspects of computer
          repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement />
        <ChipsetReplacement />
        <DataRecovery />
        <StorageReplacement />
        <SameDayDelivery />
        <FreeDiagonistics />
        <RemoteSupportService />
      </div>
    </Container>
  );
};

export default ServicesSection;
