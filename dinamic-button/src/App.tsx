import Card, { CardBody } from './components/Card'
import Button from './components/Button'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = () => setIsLoading(!isLoading)

  const list: string[] = ['Goku', 'Tanjiro', 'Chanchito feliz']
  const handleSelect = (elemento: string) => {
    console.log(`Has seleccionado: ${elemento}`)
  }
  const contenido = list.length !== 0 && <List data={list} onSelect={handleSelect} />;
  return <Card>
    <CardBody title='Hola Mundo' text='Este es el texto' />
    {contenido}
    <Button isLoading={isLoading} onClick={handleClick}>Hola mundo</Button>
  </Card>;
}

export default App;
