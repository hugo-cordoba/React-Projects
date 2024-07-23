import Card from './components/Card'
import Button from './components/Button/index'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(['Goku', 'Tanjiro', 'Chanchito Feliz']);

  const addMinion = () => setData([...data, 'Minion']);
  const delMinion = () => setData(data.slice(0, -1));

  return <Card>
    <Button onClick={addMinion}>Agregar</Button>
    <Button onClick={delMinion}>Elminar</Button>
    <List data={data}></List>
  </Card>;
}

export default App;
