const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          error deleniti quaerat, natus sed quidem magnam labore tempore
          officiis, facilis ipsum!
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available on</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/SHOE.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
