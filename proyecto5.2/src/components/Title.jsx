import React from 'react'

const Title = (props) => {
  return (
      <header>
        <h1>Este es el header de {props.nombre} y el subtitulo es {props.subTitulo}</h1>
      </header>
  )
}

export default Title;