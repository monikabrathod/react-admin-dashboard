import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "Total New Customers",
    value: 30,
    color: "#db2777",
  },
  {
    value: 60,
    color: "#6b21a8",
  },
  {
    value: 70,
    color: "f3e8ff",
  },
];
const reactDonutChartBackgroundColor = ["#db2777", "#6b21a8", "#f3e8ff"];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 10;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function App() {
  return (
    <div className="w-[20rem] h-[17rem] bg-white p-4 rounded-lg mr-5 flex flex-col">
      <strong className="text-gray-700 font-bold">Customers</strong>
      <span className="text-gray-400 font-medium text-sm">
        Customers that buy products
      </span>

      <DonutChart
        width={650}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        strokeDashoffset={reactDonutChartSelectedOffset}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
