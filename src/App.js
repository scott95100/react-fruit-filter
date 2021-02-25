
//imports
import FruitContainer from './components/FruitContainer'


function App() {
  const fruits = ['bannana', 'watermelon', 'cherry', 'guava', 'apple', 'kiwi', 'strawberry', 'mango', 'pineapple', 'avacodo']
  return (
    <div>
      <h1>Fruit Filter</h1>
      <FruitContainer fruits={fruits} />
    </div>
  );
}

export default App;
