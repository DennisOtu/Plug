import { Link } from "react-router-dom"
import blogImg01 from "../images/blog-01.jpg"
import blogImg02 from "../images/blog-02.jpg"
import blogImg03 from "../images/blog-03.jpg"
import blogImg04 from "../images/blog-05.jpg"


function BlogPosts() {

    return(
        <>            
            <div className="blogPostParent">
                <div className="blogPostChild">
                    <Link to="" className="thumbnail">
                        <img src={ blogImg01 } alt="blog-area"/>
                    </Link>
                    <div className="blog-body">
                        <div className="top-area">
                            <div className="single-meta">
                                <i className="fa-light fa-clock"></i>
                                <span>15 Sep, 2023</span>
                            </div>
                            <div className="single-meta">
                                <i className="fa-regular fa-folder"></i>
                                <span>Modern Fashion</span>
                            </div>
                        </div>
                        <Link href="blog-details.html">
                            <h4 className="title">
                                Shion Fixation: Fueling Your Passion
                                for All Things Stylish
                            </h4>
                            <p className="blogText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris neque, porttitor eget rutrum ac, sagittis et sapien. 
                                Cras pharetra ligula hendrerit metus varius mollis. Vestibulum porta arcu nec dolor porttitor ultrices. 
                                Vivamus vestibulum tellus eget lacus tristique vulputate. Proin magna ligula, tempus ac facilisis vitae, pellentesque et metus.
                            </p>
                        </Link>
                        <Link href="blog-details.html" className="shop-now-goshop-btn">
                            <span className="text">Read More</span>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="blogPostChild">
                    <Link to="" className="thumbnail">
                        <img src={ blogImg02 } alt="blog-area"/>
                    </Link>
                    <div className="blog-body">
                        <div className="top-area">
                            <div className="single-meta">
                                <i className="fa-light fa-clock"></i>
                                <span>15 Sep, 2023</span>
                            </div>
                            <div className="single-meta">
                                <i className="fa-regular fa-folder"></i>
                                <span>Modern Fashion</span>
                            </div>
                        </div>
                        <Link href="blog-details.html">
                            <h4 className="title">
                                Ashion Fixation: Fueling Your Passion
                                for All Things Stylish
                            </h4>
                            <p className="blogText">Nunc nisi leo, tristique pretium erat consequat, consequat efficitur turpis. Aliquam eget suscipit lorem. 
                                Phasellus nec lobortis velit, vel ultrices odio. Sed vel neque eros. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean fringilla, odio quis rhoncus.
                            </p>
                        </Link>
                        <Link href="blog-details.html" className="shop-now-goshop-btn">
                            <span className="text">Read More</span>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="blogPostChild">
                    <Link to="" className="thumbnail">
                        <img src={ blogImg03 } alt="blog-area"/>
                    </Link>
                    <div className="blog-body">
                        <div className="top-area">
                            <div className="single-meta">
                                <i className="fa-light fa-clock"></i>
                                <span>15 Sep, 2023</span>
                            </div>
                            <div className="single-meta">
                                <i className="fa-regular fa-folder"></i>
                                <span>Modern Fashion</span>
                            </div>
                        </div>
                        <Link href="blog-details.html">
                            <h4 className="title">
                                Fixation: Fueling Your Passion
                                for All Things Stylish
                            </h4>
                            <p className="blogText">Nunc et maximus nisl, nec scelerisque erat. Praesent sit amet iaculis risus, id dapibus sem.
                                    Aliquam dapibus arcu quis ligula sagittis, a placerat nibh aliquam. Proin condimentum, enim et commodo maximus, 
                                    risus est tristique neque, pellentesque porta quam lectus in urna. In et mi placerat, elementum diam at, maximus est. 
                                    Nunc in dictum diam. Cras ullamcorper placerat leo at accumsan.
                            </p>
                        </Link>
                        <Link href="blog-details.html" className="shop-now-goshop-btn">
                            <span className="text">Read More</span>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="blogPostChild">
                    <Link to="" className="thumbnail">
                        <img src={ blogImg04 } alt="blog-area"/>
                    </Link>
                    <div className="blog-body">
                        <div className="top-area">
                            <div className="single-meta">
                                <i className="fa-light fa-clock"></i>
                                <span>15 Sep, 2023</span>
                            </div>
                            <div className="single-meta">
                                <i className="fa-regular fa-folder"></i>
                                <span>Modern Fashion</span>
                            </div>
                        </div>
                        <Link href="blog-details.html">
                            <h4 className="title">
                                Fashion Fixation: Fueling Your Passion
                                for All Things Stylish
                            </h4>
                            <p className="blogText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a lacus nec nulla bibendum suscipit. 
                                Nunc nec diam facilisis, posuere quam non, mattis sem. Sed enim diam, pulvinar quis iaculis et, efficitur maximus dui. 
                                Morbi vel facilisis metus. Morbi faucibus consequat nisi. Quisque placerat, velit egestas auctor finibus, 
                                nisi augue commodo justo, sed tincidunt diam quam nec felis. Nunc quis risus efficitur, consectetur diam nec, accumsan sapien. 
                                Morbi suscipit fermentum tellus non vehicula. Quisque aliquam tempor.
                            </p>
                        </Link>
                        <Link href="blog-details.html" className="shop-now-goshop-btn">
                            <span className="text">Read More</span>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                            <div className="plus-icon">
                                <i className="fa-sharp fa-regular fa-plus"></i>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
                      
        </>
    )
}

export default BlogPosts


 