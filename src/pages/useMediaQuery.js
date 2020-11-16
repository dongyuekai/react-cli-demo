import React from 'react'
import { useMediaQuery } from 'react-responsive'
export default () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && (
        <>
          <p>桌面或移动PC：</p>
          {isBigScreen && <p>你也有一个大屏幕 设备宽度大于1824px</p>}
          {isTabletOrMobile && <p>你的大小就像一个平板电脑或手机 小于等于1224px</p>}
        </>
      )}
      {isTabletOrMobileDevice && <p>你是平板电脑或手机 设备宽度小于1224px</p>}
      <p>你当前处于 {isPortrait ? '竖屏' : '横屏'} 模式</p>
      {
        isRetina && <p>你是Retina屏</p>
      }
    </div>
  )
}
