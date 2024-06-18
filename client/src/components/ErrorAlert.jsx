import React from 'react'
import Alert from 'react-bootstrap/Alert';

const ErrorAlert = ( { variant,error } ) => {
  return (
    <div>
       <Alert key={variant} variant={variant}>
          {error}
        </Alert>
    </div>
  )
}

export default ErrorAlert
