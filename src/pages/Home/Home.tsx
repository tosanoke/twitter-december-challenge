import Slider from "../../components/image_slider/slider";
import FeaturedProductsCard from "../../components/featured_products_card/featuredProductsCard";


const Home = () => {
  return (
  <>
      <section className="text-center w-1/2 m-auto flex flex-col gap-12">
        <h2 className="text-7xl font-semibold leading-13 text-[#292929]">
          Photography is poetry & 
          beautiful untold stories
        </h2>
        <p className="text-2xl font-medium text-[#292929]">
        Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
        </p>
      </section>
      <section className="w-full m-auto py-24 h-[500px] overflow-hidden">
        <Slider />
      </section>
      <section className="w-4/5 m-auto flex flex-col gap-9">
        <h2 className="text-5xl font-medium leading-[65px] text-[#292929]">Featured products</h2>
        <FeaturedProductsCard />
        <FeaturedProductsCard reverse={"flex-row-reverse"} />
        <FeaturedProductsCard />
      </section>
  </>

  );
};

export default Home;
