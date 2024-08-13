import React from 'react'

const Button: React.FC<null> = () => {
  return (
    <button onClick={() => window.alert("You clicked it!")}>
      Click me
    </button>
  )
}

export default Button
