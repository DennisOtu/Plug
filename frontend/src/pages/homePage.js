import NavBar from '../components/navBar'
import ImageCarousel from '../components/imageCarousel'
import PlugPerks from '../components/plugPerks'
import TrendingProducts from '../components/trendingList'
import BestSelling from '../components/bestSellersList'
import DealsList from '../components/dealsList'
import Footer from '../components/footer'

function HomePage(props) {

    return (
        <div>
            <NavBar />

            <ImageCarousel />

            <DealsList />

            <TrendingProducts />

            <PlugPerks />

            <BestSelling />


            <Footer />
        </div>
    )
}

export default HomePage

