import NavBar from '../components/navBar'
import ImageCarousel from '../components/imageCarousel'
import PlugPerks from '../components/plugPerks'
import DealsList from '../components/dealsList'
import TrendingProducts from '../components/trendingList'
import BestSellers from '../components/bestSellersList'
import BlogPosts from '../components/blogPosts'
import Footer from '../components/footer'

function HomePage(props) {

    return (
        <div>
            <NavBar />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: '50vh',
                marginTop: 'var(--navBarHeight)',
                padding: '1px'
            }}>
                <CategoriesList />
                <ImageCarousel />
            </div>

            <DealsList />

            <TrendingProducts />

            <PlugPerks />

            <BestSellers />

            <BlogPosts />

            <Footer />
        </div>
    )
}

export default HomePage

