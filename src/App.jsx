import './App.css'
import data from "./data.json";
import ChartCard from './Components/ChartCard';

function App() {

  return (
    <>
      <h1>Pie Charts</h1>
      <div className="cards-container">
        {data.map((item)=>(
          <ChartCard data={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default App
