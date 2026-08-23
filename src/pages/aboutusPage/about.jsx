import about from "../../assets/images/about.jpg";
import "../aboutusPage/about.css"
const About = ()=>{
  return(
    <>
   <div className="about">
    <div className="left-about">
      <img src={about} alt={About}/>
    </div>
    <div className="right-about">
      <h3>About Us</h3>
      <p>Welcome to our store! We are dedicated to providing high-quality products at affordable prices. Our mission is to make online shopping simple, secure, and enjoyable for every customer. We carefully select our products to ensure the best quality and value. Customer satisfaction is our top priority, and we strive to deliver an excellent shopping experience every time.</p>
      <h3>Who We Are</h3>
      <p>We are passionate about bringing you a wide range of products that suit your everyday needs. From fashion and beauty to electronics and home essentials, we aim to offer quality products with a seamless shopping experience. Our goal is to build trust through reliable service, fast delivery, and excellent customer support.</p>
      <h3>Our Story</h3>
      <p>Our journey began with a simple idea—to create an online shopping destination where quality meets affordability. We believe everyone deserves access to great products without compromising on value. Every product in our collection is chosen with care to ensure customer satisfaction and convenience.</p>
    </div>
   </div>
    </>
  )
}
export default About;