import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'

function ProductsList() {
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
            console.log('useEffect productList component')
        }
    })
    
    const changePage = (e) => {
    	const pageSelected = e.selected + 1
        setPage(pageSelected)
        refetch()
        console.log(`selected page : page ${pageSelected}`)
    }

    return (
        <>
            <div style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {isLoading && <h3>Loading...</h3>}
                {data && data.data.results.map(product => 
                    <div className="productCard">
                        <Link to={`product/${product.id}`}>
                            <div style={{ display: 'flex' , flexDirection: 'row' , justifyContent: 'center'}}>
                                <img className="productImg" src={ product.main_image }/>
                            </div>

                            <div style={{ marginTop: '8px'}}>
                                <p style={{
                                    paddingInline: '5px', fontFamily: 'var(--fontHead)', 
                                    fontSize: '14px', fontWeight: 'bold', textAlign: 'left', 
                                    height: '40px', overflow: 'hidden'}}>{ product.name }
                                </p>

                                <p style={{fontWeight: 'bold', marginBlock: '0', textAlign: 'left', color: 'var(--pluggRed)'}}>${ product.price }</p>

                            </div>
                        </Link>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem'}}>
                            <button className="addBtn" data-product="{{ product.id }}" data-action="add">
        	                    <i className="fas fa-plus"></i><i class="fas fa-shopping-cart"></i>
                        	</button>
                        </div>

                    </div>

                    /*<div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="single-shopping-card-one">
                            <div className="image-and-action-area-wrapper">
                                <a href="shop-details.html" className="thumbnail-preview">

                                    <img src="assets/images/grocery/15.jpg" alt="grocery"/>
                                </a>
                                <div className="action-share-option">
                                    <span className="single-action openuptip message-show-action" data-flow="up" title="Add To Wishlist">
                                        <i className="fa-light fa-heart"></i>
                                    </span>
                                    <span className="single-action openuptip" data-flow="up" title="Compare" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="fa-solid fa-arrows-retweet"></i>
                                    </span>
                                    <span className="single-action openuptip cta-quickview product-details-popup-btn" data-flow="up" title="Quick View">
                                        <i className="fa-regular fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="body-content">

                                <a href="shop-details.html">
                                    <h4 className="title">Nestle Cerelac Mixed Fruits &
                                        Wheat with Milk</h4>
                                </a>
                                <span className="availability">500g Pack</span>
                                <div className="price-area">
                                    <span className="current">$36.00</span>
                                    <div className="previous">$36.00</div>
                                </div>
                                <div className="cart-counter-action">
                                    <div className="quantity-edit">
                                        <input type="text" className="input" value="1"/>
                                        <div className="button-wrapper-action">
                                            <button className="button"><i className="fa-regular fa-chevron-down"></i></button>
                                            <button className="button plus">+<i className="fa-regular fa-chevron-up"></i></button>
                                        </div>
                                    </div>
                                    <a href="#" className="rts-btn btn-primary radious-sm with-icon">
                                        <div className="btn-text">
                                            Add
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-regular fa-cart-shopping"></i>
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="fa-regular fa-cart-shopping"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>*/               
                )}
            </div>

            <ReactPaginate breakLabel={'...'} previousLabel={"prev"} nextLabel={"next"} pageCount={pageCount}
                onPageChange={changePage} pageRangeDisplayed={5} containerClassName={"paginationDiv"} previousLinkClassName={""}
                nextLinkClassName={""} disabledClassName={""} activeClassName={"paginationActive"}
                renderOnZeroPageCount={null}
            />
        </>
    )
}
export default ProductsList

