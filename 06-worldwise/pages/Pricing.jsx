import PageNavigation from "../components/PageNavigation";
import { PricingStyled } from "./PricingStyles";

function Pricing() {
  return (
    <PricingStyled>
      <PageNavigation />

      <section>
        <div>
          <h2>
            Simple pricing <br /> Just $9/month
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            ipsa ut architecto veritatis illum ex labore, asperiores maxime
            quasi! Reprehenderit ea dolores tempora facilis harum eveniet
            consequuntur quod officia provident.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city skyscrapers" />
      </section>
    </PricingStyled>
  );
}

export default Pricing;
