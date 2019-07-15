export const reducer = (accumulator, currentValue) => accumulator + currentValue

// export const sliceArray = (array) => {
//   const slicedArray = array.slice()
//   return slicedArray
// }

export const calculateSaving = (was, now) => {
  const saving = was - now
  return saving
}
