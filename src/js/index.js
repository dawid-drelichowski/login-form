import React from 'react'
import ReactDOM from 'react-dom'
import config from 'config.json'
import App from 'components/App'

ReactDOM.render(
  <App config={config}/>,
  document.getElementById('root')
)
