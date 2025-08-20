import pluggLogo from '../images/Plugg Logo.png'
import pForPlugg from '../images/P for Plugg.png'
import { Link } from 'react-router-dom'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/

const Footer = () => {

    return (
        <div>
            {/*
            <div style={{
                height: '50vh', background: 'var(--pluggBlack)',
                color: 'white', paddingTop: '4em', paddingInline: '4em',
                display: 'flex', flex: 'row', justifyContent: 'space-between'
            }}>
                <div className="d-flex flex-column col-lg-3">
                    <Link to='/' className="d-flex flex-row" style={{ textDecoration: 'none'}}>
                        <img className="brandLogo" src={pluggLogo} style={{ marginTop: '8px'}} /> 
                        <div style={{ display: 'flex', flexDirection: 'row'}}>
                            <img style={{height: '14px', marginLeft: '8px', marginTop: '15px'}} src={pForPlugg}/> 
                            <p style={{ fontFamily: 'var(--fontHead)', fontWeight: 'medium', letterSpacing: '4px', fontSize: '16px', marginLeft: '4px', marginTop: '10px'}}>LUGG</p>
                        </div>
                    </Link>            
                    <p style={{fontSize: '14px', marginTop: '2em', color: 'rgba(255, 255, 255, 0.7)'}}>Praesent tincidunt posuere dolor, nec bibendum tellus suscipit a.
                        Nullam pellentesque felis id porttitor scelerisque.
                    </p>
                </div>
                <div>
                    <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Discover</p>
                    <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Contact</p>
                    </div>

                </div>
                <div>
                    <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>About</p>
                    <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                        <p>Clients</p>
                        <p>Teams</p>
                        <p>Career</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Help</p>
                    <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                        <p>Privacy Policy</p>
                        <p>Terms And Conditions</p>
                        <p>Partners</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Follow Us</p>
                    
                        <div style={{marginTop: '2em'}}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                            <FontAwesomeIcon icon={['fab', 'instagram']} style={{ marginInline: '1em'}}/>
                            <FontAwesomeIcon icon={['fab', 'facebook']}  />
                        </div>
                    

                </div>
            </div>
            */}

            <div class="rts-footer-area pt--80 bg_light-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer-main-content-wrapper pb--70 pb_sm--30">
                                <div class="single-footer-wized">
                                    <h3 class="footer-title">About Company</h3>
                                    <div class="call-area">
                                        <div class="icon">
                                            <i class="fa-solid fa-phone-rotary"></i>
                                        </div>
                                        <div class="info">
                                            <span>Have Question? Call Us 24/7</span>
                                            <a href="#" class="number">+258 3692 2569</a>
                                        </div>
                                    </div>
                                    <div class="opening-hour">
                                        <div class="single">
                                            <p>Monday - Friday: <span>8:00am - 6:00pm</span></p>
                                        </div>
                                        <div class="single">
                                            <p>Saturday: <span>8:00am - 6:00pm</span></p>
                                        </div>
                                        <div class="single">
                                            <p>Sunday: <span>Service Close</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-footer-wized">
                                    <h3 class="footer-title">Our Stores</h3>
                                    <div class="footer-nav">
                                        <ul>
                                            <li><a href="#">Delivery Information</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Support Center</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-footer-wized">
                                    <h3 class="footer-title">Shop Categories</h3>
                                    <div class="footer-nav">
                                        <ul>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Information</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Nest Stories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-footer-wized">
                                    <h3 class="footer-title">Useful Links</h3>
                                    <div class="footer-nav">
                                        <ul>
                                            <li><a href="#">Cancellation & Returns</a></li>
                                            <li><a href="#">Report Infringement</a></li>
                                            <li><a href="#">Payments</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="single-footer-wized">
                                    <h3 class="footer-title">Our Newsletter</h3>
                                    <p class="disc-news-letter">
                                        Subscribe to the mailing list to receive updates one <br/> the new arrivals and other discounts
                                    </p>
                                    <form class="footersubscribe-form" action="#">
                                        <input type="email" placeholder="Your email address" required/>
                                        <button class="rts-btn btn-primary">Subscribe</button>
                                    </form>

                                    <p class="dsic">
                                        I would like to receive news and special offer
                                    </p>
                                </div>
                            </div>
                            <div class="social-and-payment-area-wrapper">
                                <div class="social-one-wrapper">
                                    <span>Follow Us:</span>
                                    <ul>
                                        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div class="payment-access">
                                    <span>Payment Accepts:</span>
                                    <img src="assets/images/payment/01.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

  
    )
  }
  
export default Footer
  

