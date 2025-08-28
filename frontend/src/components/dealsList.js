import { useQuery } from 'react-query'
import axios from 'axios'
import { link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function DealsList(props) {
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)

    const getAll = () => {
        return axios.get(`http://localhost:8000/api/v1/product/all?page=${page}`)
    }

    const { data, isLoading, refetch } = useQuery('allProducts', getAll, { staleTime: 0 })


    useEffect(()=>{
        if (data) {
            const total = data.data.count
            const currentPageCount = Math.ceil(total / 20)
            setPageCount(currentPageCount)
            console.log('useEffect daelsList component')
        }
    })

    return (
        <div>
            <h2 class="title-left">
                Products With Discounts
            </h2>
            { data &&
                <div className="dealsDiv">
                    <div>
                        <h4>{data.data.results[5].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[5].price}</h4>
                    </div>
                    
                    <div>
                        <h4>{data.data.results[1].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[1].price}</h4>
                    </div>

                    <div>
                        <h4>{data.data.results[2].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[2].price}</h4>
                    </div>
                    
                    <div>
                        <h4>{data.data.results[8].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[8].price}</h4>
                    </div>
                    
                    <div>
                        <h4>{data.data.results[12].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[12].price}</h4>
                    </div>
                    
                    <div>
                        <h4>{data.data.results[19].name} </h4>
                        <span>Only</span>
                        <h4>${data.data.results[19].price}</h4>
                    </div>

                </div>
            }        

            <div className="discountsDiv">
                <div className="discountCard">
                    <a href="" className="rts-btn btn-primary">Weekend Discount</a>
                    <h3 className="title">
                        Drink Fresh Corn Juice <br/>
                    </h3>
                    <h4>Good Taste</h4>

                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span className="text">Shop Now</span>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                    </a>
                </div>
                <div className="discountCard">
                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                    <h3 className="title">
                        Organic Lemon Flavored
                    </h3>
                    <h4>Banana Chips</h4>

                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span className="text">Shop Now</span>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                    </a>
                </div>
                <div className="discountCard">
                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                    <h3 className="">
                        Nozes Pecanera Brasil
                    </h3>
                    <h4>Chocolate Snacks</h4>

                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span className="text">Shop Now</span>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                    </a>
                </div>
                <div className="discountCard">
                    <a href="shop-grid-sidebar.html" className="rts-btn btn-primary">Weekend Discount</a>
                    <h3 className="title">
                        Strawberry Water Drinks
                    </h3>
                    <h4>Flavors Awesome</h4>

                    <a href="shop-grid-sidebar.html" className="shop-now-goshop-btn">
                        <span className="text">Shop Now</span>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                        <div className="plus-icon">
                            <i className="fa-sharp fa-regular fa-plus"></i>
                        </div>
                    </a>
                </div>
            </div>
                
        </div>

    )
    
}

export default DealsList

