import React, { useEffect } from 'react'
import tools from 'dyk-webpack-build-tools'
export default () => {
  useEffect(() => {
    console.log('dyk--', tools.math.add(1, 3))
    console.log('dyk--', tools.string.join(1, 3))
  }, [])
  return <div>Home</div>
}
