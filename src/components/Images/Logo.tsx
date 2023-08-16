import React from 'react'
import icon from '../../assets/Icons/'

const Logo: React.FC = () => {
  return (
    <div>
      <img 
            src={icon.logo.default}
            alt='logo'
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              position: 'relative',
              maxWidth: '100%',
            }}  
          />
    </div>
  )
}

export default Logo
