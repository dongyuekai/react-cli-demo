import React, { useEffect } from 'react'
import MediaQuery from 'react-responsive'
import tools from 'dyk-webpack-build-tools'
export default () => {
  useEffect(() => {
    console.log('dyk--', tools.math.add(1, 3))
    console.log('dyk--', tools.string.join(1, 3))
    console.log('dyk--REACT_APP_URL_API---', process.env.REACT_APP_URL_API)
  }, [])
  const PCHome = () => {
    return '我是PCHome'
  }
  const MobielHome = () => {
    return '我是MobieHome'
  }
  return (
    <div>
      <MediaQuery query='(min-device-width:1224px)'>
        <PCHome />
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <MobielHome />
      </MediaQuery>
    </div>
  )
}
