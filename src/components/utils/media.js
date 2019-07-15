const onlyScreen = 'only screen and'

const breakpoints = {
  widescreen_down: 'max-width: 1800px',
  desktop_down: 'max-width: 1440px',
  tablet_landscape_down: 'max-width: 1366px',
  tablet_down: 'max-width: 1048px',
  phone_down: 'max-width: 768px',
  small_device_down: 'max-width: 420px',
}

export const ScreenWidescreenDown = `${onlyScreen} (${breakpoints.widescreen_down})`
export const ScreenDesktopDown = `${onlyScreen} (${breakpoints.desktop_down})`
export const ScreenTabletDown = `${onlyScreen} (${breakpoints.tablet_down})`
export const ScreenPhoneDown = `${onlyScreen} (${breakpoints.phone_down})`
export const ScreenSmallDeviceDown = `${onlyScreen} (${breakpoints.phone_down})`
export const ScreenTabletLandscapeDown = `${onlyScreen} (${breakpoints.tablet_landscape_down})`
