import './FeaturedInfo.scss';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';


const FeaturedInfo = () => {
    const rate = (num, price)=>{
        if(Number(num) > 0){
            return(
                <>
                    <span className='price'>{price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
                    <span className='rate'>{'+'+ num} <ArrowUpward className='feature-icon posetive'/></span>
                </>
            )
        }else if(Number(num) < 0){
            return(
                <>
                    <span className='price'>{price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
                    <span className='rate'>{num} <ArrowDownward className='feature-icon'/></span>
                </>
            )
        }
    }
  return (
    <div className='feature-container'>
        <div className="featured-items">
            <span className='title'>Revenue</span>
            <div className="money-container">
                {rate(-8.6, 256.99)}
            </div>
            <div className="compare">Compared to last month</div>
        </div>
        <div className="featured-items">
            <span className='title'>Sales</span>
            <div className="money-container">
                {rate(10.4,1046.6)}
            </div>
            <div className="compare">Compared to last month</div>
        </div>
        <div className="featured-items">
            <span className='title'>Cost</span>
            <div className="money-container">
                {rate(5.2, 523.25)}
            </div>
            <div className="compare">Compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo