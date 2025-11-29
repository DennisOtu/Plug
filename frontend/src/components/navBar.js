import plugLogo from '../images/plugLogoWhiteBG.png'
import threeBars from '../images/icons/bar-1.svg'
import icon01 from '../images/icons/01.svg'
import icon02 from '../images/icons/02.svg'
import icon03 from '../images/icons/03.svg'
import icon04 from '../images/icons/04.svg'
import icon05 from '../images/icons/05.svg'
import icon06 from '../images/icons/06.svg'
import icon07 from '../images/icons/07.svg'
import icon08 from '../images/icons/08.svg'
import icon09 from '../images/icons/09.svg'
import icon10 from '../images/icons/10.svg'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useQuery } from 'react-query'


function NavBar(props) {
    const getCart = () => {
        return axios.get('http://localhost:8000/api/v1/cart')
    }

    const getCategories = () => {
        return axios.get('http://localhost:8000/api/v1/categoryList')
    }

    const { data: cartData, isLoading: cartLoading } = useQuery('cartInfo', getCart)
    const { data: categoriesData, isLoading: categoriesLoading } = useQuery('categoryList', getCategories)
    
    if (categoriesData) {
        console.log(categoriesData.data)
    }

    {/*let user = '{{ request.user }}'
      
    function getToken(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let csrftoken = getToken('csrftoken')

    function getCookie(name) {
        // Split cookie string and get all individual name=value pairs in an array
        let cookieArr = document.cookie.split(";");

        // Loop through the array elements
        for(let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            //Removing whitespace at the beginning of the cookie name
            //and compare it with the given string 
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        }
        // Return null if not found
        return null;
    }
    
    let cart = JSON.parse(getCookie('cart'))
    if (cart == undefined){
    cart = {}
    console.log('Cart Created!', cart)
    document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
    }

    console.log('Cart:', cart)*/}
    
    return (
    
        <div>
{/*
            <div className="navBar">
                <Link to='/' className="navLeft d-flex flex-row">
                    <img className="brandLogo" src={pluggLogo} style={{ marginTop: '8px'}} /> 
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <img style={{height: '14px', marginLeft: '8px', marginTop: '15px'}} src={pForPlugg}/> 
                        <p style={{ fontFamily: 'var(--fontHead)', fontWeight: 'medium', letterSpacing: '4px', fontSize: '16px', marginLeft: '4px', marginTop: '10px'}}>LUGG</p>
                    </div>
                </Link>
                <div className="navRight">                
                    <Link style={{ textDecoration: 'none' }}>Log In</Link>
                    
                    <Link style={{ textDecoration: 'none' }}>Sign Up</Link>
                    
                    <Link to={'/cart'} style={{ textDecoration: 'none', marginTop: '14px'}}>
                        { data && <p class="badgeCart" >{ data.data.cartItems }</p> }
                    </Link>
                </div>
            </div>
*/}


            <div className="search-header-area-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-search-category-wrapper">
                                <div className="category-search-wrapper">
                                    <Link to='/' className="navLeft d-flex flex-row topNav">

                                        <img className="brandLogo" src={plugLogo} style={{ marginTop: '8px', marginRight: '8px'}} />
                                        <h3>PLUG</h3>  

                                    </Link>
                               
                                    <form action="#" className="search-header">
                                        <input type="text" placeholder="Search for products, categories or brands" required />
                                        <Link href="#" className="rts-btn btn-primary radious-sm with-icon">
                                            <div className="btn-text">
                                                Search
                                            </div>
                                            <i className="fa fa-magnifying-glass"></i>


                                        </Link>
                                    </form>
                                </div>
                                <div className="actions-area">
                                    <div className="search-btn" id="searchs">

                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.75 14.7188L11.5625 10.5312C12.4688 9.4375 12.9688 8.03125 12.9688 6.5C12.9688 2.9375 10.0312 0 6.46875 0C2.875 0 0 2.9375 0 6.5C0 10.0938 2.90625 13 6.46875 13C7.96875 13 9.375 12.5 10.5 11.5938L14.6875 15.7812C14.8438 15.9375 15.0312 16 15.25 16C15.4375 16 15.625 15.9375 15.75 15.7812C16.0625 15.5 16.0625 15.0312 15.75 14.7188ZM1.5 6.5C1.5 3.75 3.71875 1.5 6.5 1.5C9.25 1.5 11.5 3.75 11.5 6.5C11.5 9.28125 9.25 11.5 6.5 11.5C3.71875 11.5 1.5 9.28125 1.5 6.5Z" fill="#1F1F25"></path>
                                        </svg>

                                    </div>
                                    <div className="menu-btn" id="menu-btn">

                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                            <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                            <rect width="20" height="2" fill="#1F1F25"></rect>
                                        </svg>

                                    </div>
                                </div> 

                                <div className="accont-wishlist-cart-area-header">
                                
                                    <Link href="wishlist.html" className="btn-border-only wishlist">
                                        <i className="fa fa-heart"></i>
                                        <span className="text">Wishlist</span>
                                        <span className="number">2</span>
                                    </Link>
                                    <div className="btn-border-only cart category-hover-header">
                                        <i className="fa fa-cart-shopping"></i>
                                        <span className="text">Cart</span>

                                        <span className="number">2</span>
                                        <div className="category-sub-menu card-number-show">
                                            <h5 className="shopping-cart-number">Shopping Cart (03)</h5>
                                            <div className="cart-item-1 border-top">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="../images/shop/cart-1.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <Link href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </Link>
                                                        <div className="number">
                                                            1 <i className="fa fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="cart-item-1">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="../images/shop/05.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <Link href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </Link>
                                                        <div className="number">
                                                            1 <i className="fa fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="cart-item-1">
                                                <div className="img-name">
                                                    <div className="thumbanil">
                                                        <img src="../images/shop/04.png" alt=""/>
                                                    </div>
                                                    <div className="details">
                                                        <Link href="shop-details.html">
                                                            <h5 className="title">Foster Farms Breast Nuggets Shaped Chicken</h5>
                                                        </Link>
                                                        <div className="number">
                                                            1 <i className="fa fa-x"></i>
                                                            <span>$36.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="close-c1">
                                                    <i className="fa fa-x"></i>
                                                </div>
                                            </div>
                                            <div className="sub-total-cart-balance">
                                                <div className="bottom-content-deals mt--10">
                                                    <div className="top">
                                                        <span>Sub Total:</span>
                                                        <span className="number-c">$108.00</span>
                                                    </div>
                                                    <div className="single-progress-area-incard">
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <p>Spend More <span>$125.00</span> to reach <span>Free Shipping</span></p>
                                                </div>
                                                <div className="button-wrapper d-flex align-items-center justify-content-between">
                                                    <Link to={'/cart'} className="rts-btn btn-primary ">View Cart</Link>
                                                    <Link to={'/checkout'} className="rts-btn btn-primary border-only">CheckOut</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="cart.html" className="over_link"></Link>

                                    </div>
                                    <Link href="account.html" className="btn-border-only account">
                                        <i className="fa fa-user"></i>
                                        <span>Account</span>

                                    </Link>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-header-nav-area-one header--sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="nav-and-btn-wrapper">
                                <div className="nav-area">
                                    <nav>
                                        <ul className="parent-nav">
                                            <li className="parent with-megamenu">
                                                <Link href="#"><img style={{ marginRight: '5px' }} src={threeBars} alt="icons"/>Categories</Link>
                                                <div className="rts-megamenu">
                                                    <div className="wrapper">
                                                        <div className="categoriesParent">
                                                            { categoriesData && categoriesData.data.map(item => 
                                                                <div className="megamenu-item-wrapper">
                                                                    <div className="single-megamenu-wrapper">
                                                                        <p className="title">{ item.root_category }</p>                                                                    
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
{/*                                            <li className="parent has-dropdown">
                                                <Link className="nav-link" href="#">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link className="sub-b" href="blog.html">Blog</Link></li>
                                                    <li><Link className="sub-b" href="blog-list-left-sidebar.html">Blog List Right Sidebar</Link></li>
                                                    <li><Link className="sub-b" href="blog-list-right-sidebar.html">Blog List Left Sidebar</Link></li>
                                                    <li><Link className="sub-b" href="blog-details.html">Blog Details</Link></li>
                                                </ul>
                                            </li>
*/}                                            
                                            <div style={{marginRight: '1em', fontWeight: 'bold'}}><Link className="nav-link" to="#">About</Link></div>
                                            <div style={{ fontWeight: 'bold' }}><Link className="nav-link" to="#">Contact</Link></div>

                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>            
        </div>
    )
}

export default NavBar

