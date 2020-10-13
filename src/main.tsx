import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { foo } from 'linked-dep';

console.log(foo)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
