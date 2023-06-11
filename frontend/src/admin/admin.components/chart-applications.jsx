import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { Line, Bar, Bubble, PolarArea, Radar, Scatter } from "react-chartjs-2";
import { monthName } from "../../lib/common";
const ChartApplication = ({ data }) => {
  Chart.register(...registerables);
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartLabels1, setChartLabels1] = useState([]);
  const [chartLabels2, setChartLabels2] = useState([]);
  const [countCatWise, setCountCatWise] = useState([]);
  const [countCatWiseLabel, setCountCatWiseLabel] = useState([]);
  useEffect(() => {
    montlyCounts();
    categoryWise();
    last30DaysCounts();
  }, [data]);

  const categoryWise = () => {
    const countByCategory = {};
    data.forEach((item) => {
      if (countByCategory[item.subject]) {
        countByCategory[item.subject]++;
      } else {
        countByCategory[item.subject] = 1;
      }
    });
    setCountCatWise(Object.values(countByCategory));
    setCountCatWiseLabel(Object.keys(countByCategory));
  };

  const montlyCounts = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthlyPostCounts = {};
    data.forEach((post) => {
      const postDate = new Date(post.createdAt);
      const year = postDate.getFullYear();
      const month = postDate.getMonth();
      if (year === currentYear) {
        // const monthKey = `${year}-${(month + 1).toString().padStart(2, "0")}`;
        const monthKey = monthName(month);
        if (monthlyPostCounts[monthKey]) {
          monthlyPostCounts[monthKey] += 1;
        } else {
          monthlyPostCounts[monthKey] = 1;
        }
      }
    });
    setChartLabels1(Object.keys(monthlyPostCounts));
    setChartData1(Object.values(monthlyPostCounts));
  };
  const last30DaysCounts = () => {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const monthlyPostCounts = {};
    data.forEach((post) => {
      const createdAt = new Date(post.createdAt);
      if (createdAt >= thirtyDaysAgo && createdAt <= currentDate) {
        const day = `${monthName(createdAt.getMonth())} ${createdAt.getDate()}`;
        if (monthlyPostCounts[day]) {
          monthlyPostCounts[day] += 1;
        } else {
          monthlyPostCounts[day] = 1;
        }
      }
    });
    setChartData2(Object.values(monthlyPostCounts));
    setChartLabels2(Object.keys(monthlyPostCounts));
  };
  const x = {
    borderColor: "rgba(75, 192, 192, 1)",
    fill: true,
    backgroundColor: "#00ff0024",
    borderWidth: 1,
    tension: 0.1,
  };
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };
  return (
    <div>
      <div className="flex char-flex">
        <div>
          <Bar
            data={{
              labels: chartLabels1,
              datasets: [
                {
                  label: "Last 12 Months Applications",
                  data: chartData1,
                  ...x,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                  ],
                  borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                  ],
                },
              ],
            }}
            options={chartOptions}
          />
        </div>

        <div>
          <Line
            data={{
              labels: chartLabels2,
              datasets: [
                {
                  label: "Last 30 Day's Applications",
                  data: chartData2,
                  ...x,
                },
              ],
            }}
            options={chartOptions}
          />
        </div>
      </div>
      <div>
        <Bar
          data={{
            labels: countCatWiseLabel,
            datasets: [
              {
                label: "Application Subject Wise",
                data: countCatWise,
                ...x,
              },
            ],
          }}
          options={chartOptions}
        />
      </div>
    </div>
  );
};
export default ChartApplication;
