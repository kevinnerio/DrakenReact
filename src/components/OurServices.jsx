import ServiceCard from "./ServiceCard";

function OurServices() {
    return (
        <div className="backgroundColorContainer">
         <div className="about_BackgroundImage heroImage">
            <section className="adjustBackgroundHeight">
            <div className="heroAbout_contentContainer">
              <div className="darkContrast">
               <h2 className="titleFont_bgdark addMediumMargin"><b>Our Services</b></h2>
                <div className="col-flex-about">
                <div className="about-column">
                    <ServiceCard 
                        service={{ title: 'Armed Officers', image: 'https://drakensecurity.com/wp-content/uploads/2021/09/marketing_black_instagram5-300x231.png', desc: "Our armed officers are licensed and ready to protect your assets. " , alt: "armed officer with woofer!"}}
                    /> 
                </div>
                <div className="about-column">
                    <ServiceCard
                    service={{ title: 'Patrol Services', image: 'https://drakensecurity.com/wp-content/uploads/2021/09/marketing_black_instagram1-300x231.png', desc: "Ideal for overnight shifts and protection of outdoor assets. ", alt: "hemi engine vroom vroom"}}
                    /> 
                </div>
                <div className="about-column">
                    <ServiceCard
                    service={{ title: 'Unarmed Officers', image: 'https://drakensecurity.com/wp-content/uploads/2021/09/unarmed_guard-300x231.jpg', desc: "Our unarmed officers are highly visible and make their presence known. ", alt: "suited officer" }}
                    /> 
                </div>
                </div>
              </div>
            </div>
            </section>
          </div>
        </div>
    );
  }
  
  export default OurServices; 