import { Chart } from "react-google-charts";

export default function ChartCard({ data }) {
  return (
  <>
  <div className="card">
    <Chart
      chartType="PieChart"
      data={data.data}
      diffdata={data.diffdata}
      options={data.options}
      width={"100%"}
      height={"400px"}
    />
    <p>{data.description}</p>
  </div>
  </>
  );
}