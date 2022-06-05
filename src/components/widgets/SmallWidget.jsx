import './SmallWidget.scss';
import Visibility from '@material-ui/icons/Visibility';
import data from './../../assets/users.json';

const SmallWidget = () => {
  const users = data.users.map(user => (
    <li key={user.id}>
      <img src={user.image} alt="" />
      <div className="user-info">
        <span>{user.name}</span>
        <span>{user.title}</span>
      </div>
      <button>
        <Visibility />
        Display
      </button>
    </li>
  ));
  return (
    <div className='small-widget-container'>
      <span>New Join Members</span>
      <ul>
        {users}
      </ul>
    </div>
  )
}

export default SmallWidget