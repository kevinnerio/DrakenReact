
function HeroBackground() {
  return (
      <div className="heroImageContainer">
       <div className="heroImage home_BackgroundImage">
        <section className="adjustBackgroundHeight overlay">
            <div className="heroHome_contentContainer">
                <img loading="lazy" decoding="async" width="134" height="200" src="https://drakensecurity.com/wp-content/uploads/2021/10/tiny_white_icon-204x300.png"  alt="draken tiny logo" className="addMediumMargin smallDisplayLogo"></img>
                <h1 className="titleFont_bgdark"><b>Draken Armory & Security</b></h1>
                <p className="p_bgdark containMedium">We work with the best. Professionalism, service and excellence in the heart of Miami. </p>
                <p className="p_bgdark containMedium">Freedom & 2nd amendment supporters, please visit <a href="https://drakenarmoryandsecurity.com" rel="noreferrer" target="_blank" className="darkBackground_link_custom">https://drakenarmoryandsecurity.com</a> for all of our latest Armory, Training, and Security updates!</p>
            </div>
        </section>
       </div>
      </div>
  );
}

export default HeroBackground;