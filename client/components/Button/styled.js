import styled from 'styled-components'
import * as s from '../../libs/styleUtils'

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  border: 2px solid #000;
  background: yellow;
  font-size: 18px;
  font-family: 'EBGaramond', 'SourceHanSerifCN';
  @media ${s.bigScreen} {
    font-size: 100px;
  }
`
