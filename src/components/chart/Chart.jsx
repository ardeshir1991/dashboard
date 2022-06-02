import './Chart.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
    const data = [
        {
          name: 'Jan',
          users: 4250,
        },
        {
          name: 'Feb',
          users: 3500,
        },
        {
          name: 'Mar',
          users: 2400,
        },
        {
          name: 'Apr',
          users: 5600,
        },
        {
          name: 'May',
          users: 4800,
        },
        {
          name: 'Jun',
          users: 3200,
        },
        {
          name: 'Jul',
          users: 1089,
        },
        {
          name: 'Agu',
          users: 2070,
        },
        {
          name: 'Sep',
          users: 3690,
        },
        {
          name: 'Oct',
          users: 4820,
        },
        {
          name: 'Nov',
          users: 5960,
        },
        {
          name: 'Dec',
          users: 3568,
        },
        
      ];
  return (
    <div className='chart-container'>
        <h3 className="chart-title">Users Analatics</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1 }>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#636e72'/>
                <YAxis />
                <Line type='monotone' dataKey='users' stroke='#9b59b6'/>
                <Tooltip />
                <CartesianGrid stroke='#bdc3c7' strokeDasharray='5 5'/>
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart