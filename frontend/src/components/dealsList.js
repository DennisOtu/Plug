import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import discountImg01 from '../images/top-banner-01.jpg'
import discountImg02 from '../images/top-banner-02.jpg'

function DealsList(props) {
    return (
        <div>
  
            <div className="discountsDiv">
                <div className="discountCard1">
                    <Link href="" className="rts-btn btn-primary">Weekend Discount</Link>
                    <h3 style={ { color: 'white', textAlign: 'Right'} }>
                        Drink Fresh Corn Juice <br/>
                    </h3>
                    <h4 style={ { color: 'white', textAlign: 'Right'} }>Good Taste</h4>

                    <Link to="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span style={ { color: 'white' } }>Shop Now</span>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                    </Link>
                </div>
                <div className="discountCard2">
                    <Link href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</Link>
                    <h3 style={ { color: 'white', textAlign: 'Right'} }>
                        Organic Lemon Flavored
                    </h3>
                    <h4 style={ { color: 'white', textAlign: 'Right'} }>Banana Chips</h4>

                    <Link href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span style={ { color: 'white'} }>Shop Now</span>
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
    )
    
}

export default DealsList

