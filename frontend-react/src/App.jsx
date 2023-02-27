import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import OurNavbar from '../components/navbar'
import ProblemList from '../Components/problemsList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [number, setNumber] = useState(0);
  const [problemList, setProblemList] = useState([]);


  useEffect(function() {

    fetch("https://bz-neetcode-clone.cyclic.app/api/problems?sheet=NeetCode%20All")
    .then(res => res.json())
    .then(res => setProblemList(res));
    

  }, [])


  // var number = 0;

  const increaseNumber = () => {
      // number+=1;
      // console.log(number);
      setNumber(number+1);
  }
  
  return (
    <div className="App">
      <OurNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProblemList problemList={problemList} />} />
          <Route path="/practice" element={<ProblemList problemList={problemList} />} />
          <Route path="/courses" element={<h1>Course</h1>}/>
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App