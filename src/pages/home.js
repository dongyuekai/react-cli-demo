import React, { useEffect } from 'react'
import tools from 'dyk-webpack-build-tools'
export default () => {
  useEffect(() => {
    console.log('dyk--', tools.math.add(1, 3))
    console.log('dyk--', tools.string.join(1, 3))
    console.log('dyk--REACT_APP_URL_API---', process.env.REACT_APP_URL_API)
  }, [])
  return <div>Home</div>
}
