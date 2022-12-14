import React from 'react';
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    total: 800,
  },
  {
    name: "February",
    total: 1100,
  },
  {
    name: "March",
    total: 900,
  },
  {
    name: "April",
    total: 1800,
  },
  {
    name: "May",
    total: 600,
  },
  {
    name: "June",
    total: 1900,
  },
  {
    name: "July",
    total: 2100,
  },
   {
    name: "Aug",
    total: 2900,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 8 months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4384d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4384d4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartsGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#4384d4"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart