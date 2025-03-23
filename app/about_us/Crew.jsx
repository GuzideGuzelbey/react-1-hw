import OurCrew from "./OurCrew";
import OurValues from "./OurValues";
import styles from "./about.module.css";
import OurPartners from "./OurPartners";
import OurMission from "./OurMission";

export const Crew = () => {
  return (
    <div>
      <OurMission />
      <OurValues />
      <OurCrew />
      <OurPartners />
    </div>
  );
};

export default Crew;
