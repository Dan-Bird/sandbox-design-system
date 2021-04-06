import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
`

const BaseTitle = ({ className }) => {
  return <Title className={className}>Base Title</Title>
}

export default BaseTitle
