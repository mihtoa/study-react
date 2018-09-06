import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
import ClassComponent from './classComponent'
import Field from './field'

ReactDOM.render(
  <div>
    <Family lastName="Carstairs">
      <Member name="Emma" />
      <Member name="James" />
    </Family>
    <Family>
      <Member name="Julian" lastName="Blackthorn" />
    </Family>
    <ClassComponent label="Contador" initialValue={10} />
    <Field initialValue='Digite sua mensagem...' />
  </div>
  , document.getElementById('app'))