import { rootFontSize } from '../styles/base'

/**
 * Convert a raw px number to its value in rem, represented as a string.
 * ex: pxToRem(10) = '.71428rem'
 */
const pxToEm = pxValue => `${parseFloat((pxValue / rootFontSize).toFixed(5))}em`

export default pxToEm

