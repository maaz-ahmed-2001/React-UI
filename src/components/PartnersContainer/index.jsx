import partner1 from "../../assests/images/partner1.svg";
import partner2 from "../../assests/images/partner2.svg";
import partner3 from "../../assests/images/partner3.svg";
import partner4 from "../../assests/images/partner4.svg";
import partner5 from "../../assests/images/partner5.svg";

function PartnersContainer() {
  const partners = [partner1, partner2, partner3, partner4, partner5];
  return (
    <>
      {partners.map((partner, index) => (
        <img src={partner} alt="partner-img" key={index} />
      ))}
    </>
  );
}

export default PartnersContainer;
