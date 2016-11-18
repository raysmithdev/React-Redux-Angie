import React from 'react'

const LoaderView = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? <p>Loading...</p> : ''}
    </div>
  )
}

export default LoaderView

// const LoaderView = ({ isLoading }) => {
//   return (
//     <div>
//       {
//         if(isLoading) {
//           return <p>Loading...</p>
//         } else {
//           return ' '
//         }
//       }
//     </div>
//   )
// }
//
// export default LoaderView
