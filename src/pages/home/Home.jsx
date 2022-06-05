import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import LargeWidget from '../../components/widgets/LargeWidget';
import SmallWidget from '../../components/widgets/SmallWidget';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart />
        <div className="home-widgets">
          <SmallWidget />
          <LargeWidget />
        </div>
    </div>
  )
}

export default Home;