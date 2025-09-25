import NavBar from '../components/navBar'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Footer from '../components/footer'

const ProductInfoPage = () => {
    const { productID } = useParams()
    
    const getOne = () => {
        return axios.get(`http://localhost:8000/api/v1/product/${productID}`)
    }

    const { data, isLoading } = useQuery('productInfo', getOne)

    if (data) {
        console.log(data.data);
    }
    
    return (
        <div>
            <NavBar/>
            <h1 style={{marginTop: 'var(--navBarHeight)'}}>PRODUCT INFO FOR PRODUCT {productID}</h1>
            {isLoading && <h3>Loading...</h3>}
            {data &&
<<<<<<< Updated upstream
            	<>
	                <div>
	                	<img className="productDetailImg" src={ data.data.image_url }/>
	                </div>
=======
                <>
                    <div className="rts-chop-details-area rts-section-gap bg_light-1">
                        <div className="container">
                            <div className="shopdetails-style-1-wrapper">
                                <div className="row g-5">
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <div className="product-details-popup-wrapper in-shopdetails">
                                            <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                                                <div className="product-details-popup">
                                                    <div className="details-product-area">
                                                        <div className="product-thumb-area">
                                                            <div className="cursor"></div>
                                                            <div className="thumb-wrapper one filterd-items figure">
                                                                <div className="product-thumb zoom" onmousemove="zoom(event)" ><img src={ data.data.main_image } alt="product-thumb"/>
                                                                </div>
                                                            </div>
                                                            <div className="thumb-wrapper two filterd-items hide">
                                                                <div className="product-thumb zoom" onmousemove="zoom(event)" ><img src="assets/images/shop/02.jpg" alt="product-thumb"/>
                                                                </div>
                                                            </div>
                                                            <div className="thumb-wrapper three filterd-items hide">
                                                                <div className="product-thumb zoom" onmousemove="zoom(event)" ><img src="assets/images/shop/03.jpg" alt="product-thumb"/>
                                                                </div>
                                                            </div>
                                                            <div className="thumb-wrapper four filterd-items hide">
                                                                <div className="product-thumb zoom" onmousemove="zoom(event)" ><img src="assets/images/shop/04.jpg" alt="product-thumb"/>
                                                                </div>
                                                            </div>
                                                            <div className="thumb-wrapper five filterd-items hide">
                                                                <div className="product-thumb zoom" onmousemove="zoom(event)" ><img src="assets/images/shop/05.jpg" alt="product-thumb"/>
                                                                </div>
                                                            </div>
                                                            <div className="product-thumb-filter-group">
                                                                <div className="thumb-filter filter-btn active" data-show=".one"><img src="assets/images/shop/01.jpg" alt="product-thumb-filter"/></div>
                                                                <div className="thumb-filter filter-btn" data-show=".two"><img src="assets/images/shop/02.jpg" alt="product-thumb-filter"/></div>
                                                                <div className="thumb-filter filter-btn" data-show=".three"><img src="assets/images/shop/03.jpg" alt="product-thumb-filter"/></div>
                                                                <div className="thumb-filter filter-btn" data-show=".four"><img src="assets/images/shop/04.jpg" alt="product-thumb-filter"/></div>
                                                                <div className="thumb-filter filter-btn" data-show=".five"><img src="assets/images/shop/05.jpg" alt="product-thumb-filter"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className="product-status">
                                                                <span className="product-catagory">Dress</span>
                                                                <div className="rating-stars-group">
                                                                    <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                    <div className="rating-star"><i className="fas fa-star"></i></div>
                                                                    <div className="rating-star"><i className="fas fa-star-half-alt"></i></div>
                                                                    <span>10 Reviews</span>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-title">{ data.data.name}</h2>
                                                            <p className="mt--20 mb--20">
                                                                { data.data.description }
                                                            </p>
                                                        <span className="product-price mb--15 d-block" style={{ color: "#DC2626", fontWeight: 600}}>${ data.data.price }</span>
                                                            <div className="product-bottom-action">
                                                                <div className="cart-edits">
                                                                    <div className="quantity-edit action-item">
                                                                        <button className="button"><i className="fal fa-minus minus"></i></button>
                                                                        <input type="text" className="input" value="01" />
                                                                        <button className="button plus">+<i className="fal fa-plus plus"></i></button>
                                                                    </div>
                                                                </div>
                                                                <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                                                    <div className="btn-text">
                                                                        Add To Cart
                                                                    </div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                                    </div>
                                                                    <div className="arrow-icon">
                                                                        <i className="fa-regular fa-cart-shopping"></i>
                                                                    </div>
                                                                </a>
                                                                <a href="javascript:void(0);" className="rts-btn btn-primary ml--20"><i className="fa-light fa-heart"></i></a>
                                                            </div>
                                                            <div className="product-uniques">
                                                                <span className="sku product-unipue mb--10"><span style={{fontWeight: 400, margiRight: '10px'}}>SKU: </span> BO1D0MX8SJ</span>
                                                                <span className="catagorys product-unipue mb--10"><span style={{fontWeight: 400, marginRight: '10px'}}>Categories: </span> { data.data.category }</span>
                                                                <span className="tags product-unipue mb--10"><span style={{fontWeight: 400, marginRight: '10px'}}>Tags: </span> fashion, t-shirts, Men</span>
                                                                <span className="tags product-unipue mb--10"><span style={{fontWeight: 400, marginRight: '10px'}}>LIFE:: </span> 6 Months</span>
                                                                <span className="tags product-unipue mb--10"><span style={{fontWeight: 400, marginRight: '10px'}}>Type: </span> original</span>
                                                                <span className="tags product-unipue mb--10"><span style={{fontWeight: 400, marginRight: '10px'}}>Category: </span> Beverages, Dairy & Bakery</span>
                                                            </div>
                                                            <div className="share-option-shop-details">
                                                                <div className="single-share-option">
                                                                    <div className="icon">
                                                                        <i className="fa-regular fa-heart"></i>
                                                                    </div>
                                                                    <span>Add To Wishlist</span>
                                                                </div>
                                                                <div className="single-share-option">
                                                                    <div className="icon">
                                                                        <i className="fa-solid fa-share"></i>
                                                                    </div>
                                                                    <span>Share On social</span>
                                                                </div>
                                                                <div className="single-share-option">
                                                                    <div className="icon">
                                                                        <i className="fa-light fa-code-compare"></i>
                                                                    </div>
                                                                    <span>Compare</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-discription-tab-shop mt--50">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Product Details</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Additional Information</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tabt" data-bs-toggle="tab" data-bs-target="#profile-tab-panes" type="button" role="tab" aria-controls="profile-tab-panes" aria-selected="false">Customer Reviews (01)</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade   show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                                    <div className="single-tab-content-shop-details">
                                                        <p className="disc">
                                                            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                                        </p>
                                                        <div className="details-row-2">
                                                            <div className="left-area">
                                                                <img src="assets/images/shop/06.jpg" alt="shop"/>
                                                            </div>
                                                            <div className="right">
                                                                <h4 className="title">All Natural Italian-Style Chicken Meatballs</h4>
                                                                <p className="mb--25">
                                                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit amet quam egestas semperAenean ultricies mi vitae est Mauris placerat eleifend.
                                                                </p>
                                                                <ul className="bottom-ul">
                                                                    <li>Elementum sociis rhoncus aptent auctor urna justo</li>
                                                                    <li>Habitasse venenatis gravida nisl, sollicitudin posuere</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                                    <div className="single-tab-content-shop-details">
                                                        <p className="disc">
                                                            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                                        </p>
                                                        <div className="table-responsive table-shop-details-pd">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Kitchen Fade Defy</th>
                                                                        <th>5KG</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>PRAN Full Cream Milk Powder</td>
                                                                        <td>3KG</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Net weight</td>
                                                                        <td>8KG</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Brand</td>
                                                                        <td>Reactheme</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Item code</td>
                                                                        <td>4000000005</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Product type</td>
                                                                        <td>Powder milk</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <p className="cansellation mt--20">
                                                            <span> Return/cancellation:</span> No change will be applicable which are already delivered to customer. If product quality or quantity problem found then customer can return/cancel their order on delivery time with presence of delivery person.
                                                        </p>
                                                        <p className="note">
                                                            <span>Note:</span> Product delivery duration may vary due to product availability in stock.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile-tab-panes" role="tabpanel" aria-labelledby="profile-tabt" tabindex="0">
                                                    <div className="single-tab-content-shop-details">
                                                        <div className="product-details-review-product-style">
                                                            <div className="average-stars-area-left">
                                                                <div className="top-stars-wrapper">
                                                                    <h4 className="review">
                                                                        5.0
                                                                    </h4>
                                                                    <div className="rating-disc">
                                                                        <span>Average Rating</span>
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <span>(1 Reviews & 0 Ratings)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="average-stars-area">
                                                                    <h4 className="average">66.7%</h4>
                                                                    <span>Recommended
                                                                        (2 of 3)</span>
                                                                </div>
                                                                <div className="review-charts-details">
                                                                    <div className="single-review">
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </div>
                                                                        <div className="single-progress-area-incard">
                                                                            <div className="progress">
                                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span className="pac">100%</span>
                                                                    </div>
                                                                    <div className="single-review">
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                        </div>
                                                                        <div className="single-progress-area-incard">
                                                                            <div className="progress">
                                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{ width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span className="pac">80%</span>
                                                                    </div>
                                                                    <div className="single-review">
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                        </div>
                                                                        <div className="single-progress-area-incard">
                                                                            <div className="progress">
                                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span className="pac">60%</span>
                                                                    </div>
                                                                    <div className="single-review">
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                        </div>
                                                                        <div className="single-progress-area-incard">
                                                                            <div className="progress">
                                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span className="pac">40%</span>
                                                                    </div>
                                                                    <div className="single-review">
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                            <i className="fa-regular fa-star"></i>
                                                                        </div>
                                                                        <div className="single-progress-area-incard">
                                                                            <div className="progress">
                                                                                <div className="progress-bar wow fadeInLeft" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span className="pac">30%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="submit-review-area">
                                                                <form action="#" className="submit-review-area">
                                                                    <h5 className="title">Submit Your Review</h5>
                                                                    <div className="your-rating">
                                                                        <span>Your Rating Of This Product :</span>
                                                                        <div className="stars">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <i className="fa-solid fa-star"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="half-input-wrapper">
                                                                        <div className="half-input">
                                                                            <input type="text" placeholder="Your Name*"/>
                                                                        </div>
                                                                        <div className="half-input">
                                                                            <input type="text" placeholder="Your Email *"/>
                                                                        </div>
                                                                    </div>
                                                                    <textarea name="#" id="#" placeholder="Write Your Review" required></textarea>
                                                                    <button className="rts-btn btn-primary">SUBMIT REVIEW</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1  rts-sticky-column-item">
                                        <div className="theiaStickySidebar">
                                            <div className="shop-sight-sticky-sidevbar  mb--20">
                                                <h6 className="title">Available offers</h6>
                                                <div className="single-offer-area">
                                                    <div className="icon">
                                                        <img src="assets/images/shop/01.svg" alt="icon"/>
                                                    </div>
                                                    <div className="details">
                                                        <p>Get %5 instant discount for the 1st Flipkart Order using Ekomart UPI T&C</p>
                                                    </div>
                                                </div>
                                                <div className="single-offer-area">
                                                    <div className="icon">
                                                        <img src="assets/images/shop/02.svg" alt="icon"/>
                                                    </div>
                                                    <div className="details">
                                                        <p>Flat $250 off on Citi-branded Credit Card EMI Transactions on orders of $30 and above T&C</p>
                                                    </div>
                                                </div>
                                                <div className="single-offer-area">
                                                    <div className="icon">
                                                        <img src="assets/images/shop/03.svg" alt="icon"/>
                                                    </div>
                                                    <div className="details">
                                                        <p>Free Worldwide Shipping on all
                                                            orders over $100</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="our-payment-method">
                                                <h5 className="title">Guaranteed Safe Checkout</h5>
                                                <img src="assets/images/shop/03.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> Stashed changes

	             	<h2>PRODCUT NAME = {data.data.name} </h2>
            	</>

         	}

         	<Footer />
        </div>
    )
}

export default ProductInfoPage;

