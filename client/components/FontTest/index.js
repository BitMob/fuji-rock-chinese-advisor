import styled from "styled-components"
import { fonts, colors as c } from "../../libs/styleUtils"

const EnRegP = styled.p`
  ${fonts.EnReg};
`

const EnBoldP = styled.p`
  ${fonts.EnBold};
  color: ${c.yellow};
`

const EnItlP = styled.p`
  ${fonts.EnItl};
  color: ${c.pink};
`

const EnItlBIP = styled.p`
  ${fonts.EnBoldItl};
  color: ${c.blue};
`

const EnItlSIP = styled.p`
  ${fonts.EnSemiItl};
`

const CnBoldP = styled.p`
  ${fonts.CnBold};
`

const CnBoldSansP = styled.p`
  ${fonts.CnBoldSans};
`

const FontTest = () => (
  <div>
    <EnRegP>Fuji Rock</EnRegP>
    <EnItlP>Fuji Rock</EnItlP>
    <EnItlBIP>Fuji Rock</EnItlBIP>
    <EnBoldP>Fuji Rock</EnBoldP>
    <EnItlSIP>Fuji Rock</EnItlSIP>
    <CnBoldP>富士搖滾中文指南</CnBoldP>
    <CnBoldSansP>富士搖滾中文指南</CnBoldSansP>
  </div>
)

export default FontTest
