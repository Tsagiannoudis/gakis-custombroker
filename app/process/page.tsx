import HeroProcess from "@/components/process/HeroProcess";
import DetailsProcess from "@/components/process/DetailsProcess";
import Procedures from "@/components/home/Procedures";
import HowCost from "@/components/process/HowCost";


const ProcessPage = () => {
  return (
    <div className="services-page">
      <HeroProcess />
      <Procedures />
      <DetailsProcess />
      <HowCost />
    </div>
  );
}

export default ProcessPage;