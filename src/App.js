
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Card from './card';
import data from './data';

console.log(data)

function App() {

  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})        

   return (
    <div className="App">     
     <Navbar />
     <Hero/>
     <div className="card-list">
     {cards}
     </div>
     
     
     
    </div>
  );
}

export default App;
