import { useState } from 'react'
import './App.css'
import { Show, If, Else } from 'multi-condition'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Show>
        <If condition={count > 5}>
          <div className='condition-box red'>
            <strong>Condition 1</strong>Counter &gt; 5
          </div>
        </If>
        <If condition={count > 10}>
          <div className='condition-box green'>
            <strong>Condition 2</strong> Counter &gt; 10
          </div>
        </If>
        <Else>
          <div className='condition-box blue'>
            <strong>Condition Else</strong><p>Counter &lt; 5</p>
          </div>
        </Else>
      </Show>
      <div className="button-box">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
