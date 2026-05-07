import PopularCard from "@/components/PopularCard"

const PopularGrid = ({popuInfo}) => {
  return (
    <section className="grid grid-cols-3 gap-4">
    {popuInfo.map(({name, description},index) => (
        <PopularCard key={index} name={name} description={description}/>
    ))}
    </section>
 );
};

export default PopularGrid

/*<section class="popular-recipes">
        <h2>POPULAR RECIPE COLLECTIONS</h2>
        <div class="title-line"></div>

        <div class="recipes-container">
          <article class="recipe-cardPopular">
            <a href="recipe.html" class="card-link">
              <img
                src="assets/imagenes/pollito.png"
                alt="Mango Salsa Chicken"
              />
              <h3>Mango Salsa Chicken</h3>
              <p>
                A flavorful stir-fried noodle dish packed with tender chicken,
                fresh vegetables, and a savory soy-based sauce.
              </p>
            </a>
          </article>

          */