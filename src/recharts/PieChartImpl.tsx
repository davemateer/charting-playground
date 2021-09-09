import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { chartAspect, statusColors } from "../shared/constants";
import { caseStatusLast60Days } from "../shared/data";

const PieChartImpl = () => (
  <ResponsiveContainer width="100%" aspect={chartAspect}>
    <PieChart>
      <Pie
        data={caseStatusLast60Days}
        dataKey="value"
        nameKey="name"
        label
        innerRadius="50%"
      >
        {caseStatusLast60Days.map((entry, index) => (
          <Cell key={index} fill={statusColors[entry.name]} />
        ))}
      </Pie>
      <Legend align="right" layout="vertical" verticalAlign="top" />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartImpl;
