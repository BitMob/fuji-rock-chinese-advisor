import React from 'react'
import styled from 'styled-components'
import connect, { reducer } from './store'
import { fonts as f, colors as c } from '../../libs/styleUtils'

const Item = styled.li`
  font-size: 16px;
  ${f.CnBoldSans};
  color: ${c.blue};
`

const comp = ({ changePath }) => (
  <div>
    <ul>
      <Item onClick={() => changePath('news')}>新聞</Item>
      <Item>陣容</Item>
    </ul>
  </div>
)
const Menu = connect(comp)

export { reducer, Menu }
