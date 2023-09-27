import { Link } from "react-router-dom";
import "../about.css";

function About(props) {
  return (
    <div style={{ textAlign: 'center' }}>
            {/* Navigation Bar */}
            <div className="navigation">
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Create Recipe</Link>
            <Link to="/">Contact</Link>
        </nav>
        </div>
    <div className="about">
      <h2>About FoodieFaves</h2>
      <h6>Welcome to FoodieFaves, your ultimate destination for culinary inspiration and adventures. Whether your a seasoned chef or a kitchen novice, FoodieFaves is here to elevate your cooking experience and bring the joy of delicious, homemade meals to your table.</h6>
      <header>
        <h1>Our Mission</h1>
    </header>
    <section id="mission">
        <h5>
            At FoodieFaves, we're passionate about making cooking accessible, enjoyable, and rewarding for everyone. Our mission is to empower home cooks, food enthusiasts, and culinary explorers with a treasure trove of handpicked recipes, expert tips, and a vibrant community that shares a common love for all things food.
        </h5>
    </section>
    
    <section id="sets-apart">
    <header>
        <h1>What sets us apart</h1>
    </header>
        <ul>
            <li>Curated Recipes: Our team of culinary experts scours the culinary landscape to curate the most mouthwatering and diverse collection of recipes. From classic comfort food to innovative global cuisines, you'll find recipes that suit every taste and occasion.</li>
            <li>Personalized Experience: FoodieFaves understands that your culinary journey is unique. That's why we offer personalized recommendations based on your preferences and dietary restrictions, ensuring you always find recipes that resonate with your taste buds.</li>
            <li>Step-by-Step Guidance: Our recipes come with detailed step-by-step instructions and high-quality images, making it easy for cooks of all skill levels to recreate dishes that look and taste like they came from a professional kitchen.</li>
            <li>Interactive Cooking: Get hands-on with our interactive cooking features, including timers, conversion tools, and shopping lists. Say goodbye to kitchen chaos and hello to organized, stress-free cooking.</li>
            <li>Community and Sharing: Connect with fellow foodies, share your culinary triumphs, and seek advice in our lively community forums. FoodieFaves is more than an app; it's a thriving food-loving community.</li>
            <li>Explore New Horizons: Embark on culinary adventures by discovering recipes from around the world. Travel through your taste buds and bring the flavors of distant lands to your dining table.</li>
        </ul>
    </section>
    
    <section id="join-family">
    <header>
        <h1>Join the FoodieFaves Family</h1>
    </header>
        <h5>
            Whether you're whipping up a quick weeknight dinner, planning an elaborate feast, or simply looking for culinary inspiration, FoodieFaves is your trusted companion on your food journey. Download our app today and start exploring the endless possibilities of home cooking.
        </h5>
    </section>
    
    <section id="dive-into-world">
        <h5>Dive into a world of flavor, creativity, and culinary excellence with FoodieFaves- where every meal is an opportunity to create lasting memories and savor the joy of food.</h5>
    </section>
      
    </div>
    </div>
  );
}

export default About;

