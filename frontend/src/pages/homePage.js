import NavBar from '../components/navBar'
import CategoriesList from '../components/categoriesList'
import ImageCarousel from '../components/imageCarousel'
import ProductsList from '../components/productsList'
import DealsList from '../components/dealsList'
import Footer from '../components/footer'

function HomePage(props) {

    return (
        <div>
            <NavBar />

            <div>
                <ImageCarousel />
            </div>

            <DealsList />

            <ProductsList />

            <Footer />
        </div>
    )
}

export default HomePage

