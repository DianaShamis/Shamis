import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button.jsx"
import NewButton from "./components/Button/NewButton.jsx"
import Radio from './components/Radio/Radio.jsx'
import InputField from './components/InputField/InputField.jsx'
import AddElementButton from './components/Button/AddElementButton.jsx'


const App = () => {
  const [mode, setMode] = useState('increment');
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, {
        id: Date.now(),
        text: inputValue
      }]);
      setInputValue('');
    }
  };


  return (
    <div>
      
      <label htmlFor="">Лабораторная работа №1</label>
      <br />

      <Button>Наша кнопка</Button>
      <Button>Это уже другая кнопка</Button>
      <Button title="Вы должны увидеть данный текст при наведении на кнопку">
        Кнопка
      </Button>
      <NewButton mode={mode} title="Hello World!">
        Клик
      </NewButton>
      <Radio checked={mode === 'Инкремент'} onChange={setMode}>
        Инкремент
      </Radio>
      <Radio checked={mode === 'Декремент'} onChange={setMode}>
        Декремент
      </Radio>

      <br />
      <label htmlFor="">Лабораторная работа №2</label>
      <br />
      <InputField 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <AddElementButton 
          onClick={handleAddItem}
          disabled={!inputValue.trim()}
      >
        Добавить содержимое из поля
      </AddElementButton>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
