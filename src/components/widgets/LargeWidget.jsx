import './LargeWidget.scss';
import data from './../../assets/users.json';

const LargeWidget = () => {
  const ButtonType = ({type}) => {
    return <button className={'lgWidget-button ' + type}>{type}</button>
  }
  const items = data.users.map(user => (
    <tr className='lgWidget-info'>
      <td className='lgWidget-user'>
        <img src={user.image} alt="" />
        <span>{user.name}</span>
      </td>
      <td className='lgWidget-date'>28 March 2022</td>
      <td className='lgWidget-amount'>$268.65</td>
      <td className='lgWidget-status'>
        <ButtonType type={user.status}/>
      </td>
    </tr>
  ))
  return (
    <div className='large-widget-container'>
      <h3>Latest Transactions</h3>
      <table className='large-widget-table'>
        <tr className='table-title'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {items}
      </table>
    </div>
  )
}

export default LargeWidget