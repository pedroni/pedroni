

export function scrollTo(selector: string, offset = 80) {
  let element: HTMLElement | null = null;
  if (typeof selector === 'string'){
    element = document.querySelector(selector)
  }

  if (element) {
    window.scroll({
      top: Math.max(0, element.offsetTop - offset),
      left: 0,
      behavior: 'smooth'
    })
  }
}

export function formDataToJson(formData: FormData) {
  return Array.from(formData).reduce(
    (currentData, [key, value]) => ({
      ...currentData,
      [key]: value
    }),
    {}
  )
}
