import ImagesContent from './components/ImagesContent/ImagesContent';
import SelectContent from './components/SelectContent/SelectContent';
import SinglePage from './components/SinglePage/SinglePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import './App.css';


function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ImagesContent home={1} />}/>
          <Route path='Category' element={<SelectContent />}/>
          <Route path='Category/:id' element={<SinglePage />}/>
          <Route path='*' element={<div style={{height:'90vh'}}>Nothing Found 404</div>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
