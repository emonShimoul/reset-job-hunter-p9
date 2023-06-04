import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const marksArray = [
    {
      id: 1,
      name: "Assignment 1",
      mark: 60,
    },
    {
      id: 2,
      name: "Assignment 2",
      mark: 60,
    },
    {
      id: 3,
      name: "Assignment 3",
      mark: 60,
    },
    {
      id: 4,
      name: "Assignment 4",
      mark: 60,
    },
    {
      id: 5,
      name: "Assignment 5",
      mark: 55,
    },
  ];

  return (
    <div className="container mt-5 pt-5">
      <AreaChart
        width={1000}
        height={400}
        data={marksArray}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={"mark"}
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default Statistics;
