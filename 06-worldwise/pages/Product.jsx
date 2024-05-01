import PageNavigation from "../components/PageNavigation";
import { PricingStyled } from "./PricingStyles";

function Product() {
  return (
    <PricingStyled>
      <PageNavigation />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            laboriosam. Harum distinctio placeat quidem voluptatum impedit illum
            iste eligendi fugiat minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            perspiciatis. Totam, minus. Harum dolorem repellat expedita quam,
            debitis corporis id eos.
          </p>
        </div>
      </section>
    </PricingStyled>
  );
}

export default Product;
