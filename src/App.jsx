import './App.css';
import HeaderCardSection from './HeaderCardSection';
import OverviewSection from './OverviewSection';


function App() {


  return (
    <main>
      <section className="responsive container d-flex  flex-column justify-content-evenly p-5" >
      <header className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex flex-column">
          <h3 className="animateTitle fw-bolder text-dark">Social Media Dashboard</h3>
          <p className="text-secondary">Total Followers: 23,004</p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-2 flex-row ">
          <span className="text-secondary">Dark/Light Mode</span>
          <input className="m-0 p-0" type="checkbox"/>  
        </div>
      </header>

      <HeaderCardSection/>

      <h5 className='text-secondary mt-5 fw-bolder'>Overview - Today</h5>
      <OverviewSection/>

      </section>
    </main>
  );
}

export default App;
