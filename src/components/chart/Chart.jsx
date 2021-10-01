import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({ title, data, dataKey, grid}) {

    const data = [
        {
            name: 'Jan',
            user: 4000,
        },
        {
            name: 'Feb',
            user: 3000,
        },
        {
            name: 'Mar',
            user: 2000,
        },
        {
            name: 'Apr',
            user: 2780,
        },
        {
            name: 'May',
            user: 1890,
        },
        {
            name: 'Jun',
            user: 2390,
        },
        {
            name: 'July',
            user: 3490,
        },
        {
            name: 'Aug',
            user: 4000,
        },
        {
            name: 'Sep',
            user: 3000,
        },
        {
            name: 'Oct',
            user: 2000,
        },
        {
            name: 'Nov',
            user: 2780,
        },
        {
            name: 'Dec',
            user: 1890,
        },
      ];

    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data = {data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="user" stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfef" strokeDasharray="5 5"/>}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
