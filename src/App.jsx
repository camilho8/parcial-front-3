import { useState } from 'react'
import { Form } from './Components/Form';
import { Card } from './Components/Card';



function App() {

  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState('');
  const [favoriteAnimal, setFavoriteAnimal] = useState('');

  const handleSubmit2 = (inputName, inputFavoriteAnimal) => {
    setName(inputName);
    setFavoriteAnimal(inputFavoriteAnimal);
    setShowCard(true);
  };



  return (
    <div style= {{ margin: 300}}>

    <h1 style= {{ color: 'yellow'}}>Elige un animal</h1>

    <Form onSubmit={handleSubmit2}></Form>

    {showCard && <Card name= {name} favoriteAnimal= {favoriteAnimal}></Card>}
     
    </div>
  )
}

export default App