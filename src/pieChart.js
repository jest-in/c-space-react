// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    category: "0-10",
    male: 4000,
    female: 2400,
  },
  {
    category: "11-20",
    male: 3000,
    female: 1398,
  },
  {
    category: "21-30",
    male: 2000,
    female: 8,
  },
  {
    category: "31-40",
    male: 2780,
    female: 3908,
  },
  {
    category: "41-50",
    male: 18,
    female: 4800,
  },
  {
    category: "51-60",
    male: 2390,
    female: 3800,
  },
  {
    category: "61-70",
    male: 3490,
    female: 4300,
  },
  {
    category: "71-80",
    male: 200,
    female: 3568,
  },
  {
    category: "81-90",
    male: 1245,
    female: 4256,
  },
  {
    category: "91-100",
    male: 1458,
    female: 1235,
  },
  {
    category: "100 above",
    male: 6542,
    female: 2453,
  },
];

export default function Chart() {
  return (
    <BarChart
      width={1500}
      height={500}
      data={data}
      margin={{
        top: 10  ,
        right: 30,
        left: 20,
        bottom: 100,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="male" fill="#FB466C" minPointSize={5}></Bar>
      <Bar dataKey="female" fill="#6C63F0" minPointSize={10} />
    </BarChart>
  );
}
