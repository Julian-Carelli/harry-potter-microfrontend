const validateUrl = (url: string) => {
  const expresionRegularURL = /^(ftp|http|https):\/\/[^ "]+$/
  return expresionRegularURL.test(url)
}

export const validateImage = (image: string) =>
  validateUrl(image)
    ? image
    : 'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png'

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)
