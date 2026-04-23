import HeroServices from "@/components/services/HeroServices";
import DetailsServices from "@/components/services/DetailsServices";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <HeroServices />
      <DetailsServices />
    </div>
  );
}

export default ServicesPage;