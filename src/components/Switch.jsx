import React, {useState} from 'react'

const Switch = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light')

  const setLightTheme = () => {
    setCounter(counter + 1);
    setTheme('light')
  }

  const setDarkTheme = () => {
    setCounter(counter + 1);
    setTheme('dark')
  }

  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Times changed:{counter}</h4>
      <button onClick={setLightTheme}>Light Theme</button>
      <button onClick={setDarkTheme}>Dark Theme</button>
    </div>
  )
}

export default Switch;
