/* eslint-disable prettier/prettier */
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useAppSelector } from '../app/redux-hooks';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function CustomLineChart() {
  const {coordinations} = useAppSelector(state => state.result);
  return (
    <div>
      <ResponsiveContainer width="98%" height={414}>
        <LineChart
          data={coordinations}
          margin={{
            top: 30,
            right: 30,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="KP" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="X"
            stroke="#FF0047"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Z" stroke="#6900B8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
