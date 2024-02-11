import Container from 'react-bootstrap/Container';

function FooterLayout() {
  return (
    <div class="footer-container">
        <div className="footerLayoutMain">
            <section className="footer_flex p_bgdark flex">
            <div className="footerLayout_col1 column">
                    <h4>Draken Security</h4>
                    <p>Florida Security Agency License B1200082 </p>
                    <p>California Private Patrol Operator License 16541</p>
                    <p>Tennessee Security Company License 13349</p>
                </div>
                <div className="footerLayout_col2 column">
                    <h4>Contact Us</h4>
                      <p><b>Address:</b>2954 Southeast 30th Ave. Pbbroke Park, FL 33009 </p>
                      <p><a href="mailto:info@drakenarmory.com"><b>email:</b> info@drakenarmory.com</a></p>
                      <p><a href="tel:305-481-8022"><b>Phone:</b> 305-481-8022</a></p>
                </div>
                <div className="footerLayout_col3 column">
                    <h4>Services</h4>
                      <p>Armed Guards</p>
                      <p>Unarmed Officers</p>
                      <p>Patrol Services</p>
                </div>
            </section>
        </div>
    </div>
 ); 
}

export default FooterLayout;