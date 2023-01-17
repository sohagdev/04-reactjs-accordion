import React from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Question And Answers About Login</h3>
        <section className='info'>
          {data.map((item) => (
            <SingleQuestion item={item} key={item.id} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
