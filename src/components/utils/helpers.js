export const reducer = (accumulator, currentValue) => accumulator + currentValue

export const findIndexOfArray = (array, input) => {
  const index = array.findIndex(item => item.id === input.id)
  return index
}

export const calculateSaving = (was, now) => {
  const saving = was - now
  return saving
}
