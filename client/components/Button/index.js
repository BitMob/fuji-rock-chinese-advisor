import React from 'react'
import { Button as Btn } from './styled'

const Button = ({ text, onClick }) => <Btn onClick={onClick}>{text}</Btn>

export default Button
