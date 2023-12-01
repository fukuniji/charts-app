import './App.css'
import { Chart } from "react-google-charts";

const data = [
  ["Gas", "percentage"],
  ["Nitrogen", 78],
  ["Oxygen", 21],
  ["Other", 1],
];

const dataLang = [
  ["Language", "Internet users"],
  ["English", 1186451052],
  ["Chinese", 888453068],
  ["Spanish", 363684593],
  ["Arabic", 237418349],
  ["Indonesian", 198029815],
  ["Portuguese", 171750818],
  ["French", 151733611],
  ["Japanese", 118626672],
  ["Russian", 116353942],
  ["German", 92525427],
  ["Others", 1060551371],
];

const dataPacman = [
  ["", ""],
  ["Looks like Pac-man", 75],
  ["Does not look like Pac-man", 25],
];

const dataSpiderMan = [
  ["", ""],
  ["Spider-Man", 35],
  ["Spider-Man", 5],
  ["Does whatever", 35],
  ["a spider can", 5],
  ["Spins a web", 35],
  ["any size", 5],
  ["Catches thieves", 35],
  ["just like flies", 5],
  ["Look out", 35],
  ["Here comes", 12],
  ["the Spider-Man", 35],
  ["Is he strong?", 12],
  ["Listen bud", 17],
  ["He's got radioactive blood", 5],
  ["Can he swing ", 17],
  ["from a thread?", 5],
  ["Take a look", 17],
  ["overhead", 5],
  ["Hey, there", 17],
  ["There goes", 12],
  ["the Spider", 35],
  ["-Man", 12],
];

const options = {
  title: "Atmospheric air components percentage",
};

const optionsLang = {
  title: "Internet users by language",
};

const optionsPacman = {
  title: "Percentage of chart which looks like Pac-man",
  pieStartAngle: 135,
  pieSliceText: 'none',
  slices: {
    0: { color: 'yellow' },
    1: { color: 'black', offset: 0.3 }
  },
};
const optionsSpiderMan = {
  title: "S-pie-derman",
  pieStartAngle: 55,
  pieSliceText: 'none',
  slices: {
    0: { color: 'red' },
    1: { color: 'black' },
    2: { color: 'red' },
    3: { color: 'black' },
    4: { color: 'red' },
    5: { color: 'black' },
    6: { color: 'red' },
    7: { color: 'black' },
    8: { color: 'red' },
    9: { color: 'black' },
    10: { color: 'white' },
    11: { color: 'black' },
    12: { color: 'red' },
    13: { color: 'black' },
    14: { color: 'red' },
    15: { color: 'black' },
    16: { color: 'red' },
    17: { color: 'black' },
    18: { color: 'red' },
    19: { color: 'black' },
    20: { color: 'white' },
    21: { color: 'black' }
  },
};


function App() {

  return (
    <>
      <h1>Pie Charts</h1>
      <div className="cards-container">
        <div className="card">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
          <p>A pie chart showing Atmospheric air components percentage</p>
        </div>
        <div className="card">
            <Chart
              chartType="PieChart"
              data={dataLang}
              options={optionsLang}
              width={"100%"}
              height={"400px"}
            />
            <p>InternetWorldStats estimates of the number of Internet users by language as of March 31, 2020</p>
        </div>
        <div className="card">
            <Chart
              chartType="PieChart"
              data={dataPacman}
              options={optionsPacman}
              width={"100%"}
              height={"400px"}
            />
        </div>
        <div className="card">
            <Chart
              chartType="PieChart"
              data={dataSpiderMan}
              options={optionsSpiderMan}
              width={"100%"}
              height={"400px"}
            />
        </div>
      </div>
    </>
  )
}

export default App
