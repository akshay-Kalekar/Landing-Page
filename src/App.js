import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Search from './component/Search';
import Main from './component/Main'
import Card from './component/Card';
import Footer from './component/Footer';
import { CardData } from './component/CardData';

function App() {
const CardListing = CardData.map(({img,title},index)=>{
  return(
    <Card 
    title = {title}
    img = {img} 
    /> 
  )})
  console.log(CardListing)
  return (
    <div className="App   gap-10  h-[100vh] justify-center align-middle">
      <div className="flex flex-col px-4 py-2">
      <Navbar />
      <Main />
      <Search/>
      <div className='grid gap-4 grid-cols-3'>
        {CardListing}
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
