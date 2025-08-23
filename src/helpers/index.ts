import remarkHtml from 'remark-html'
import { unified } from 'unified'

export const calculateYears = (fromDate: string) => {
  const from = new Date(fromDate)
  const today = new Date()
  let years = today.getFullYear() - from.getFullYear()
  const monthDiff = today.getMonth() - from.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < from.getDate())) {
    years--
  }
  return years
}

export function scrollTo(selector: string, offset = 80) {
  let element: HTMLElement | null = null
  if (typeof selector === 'string') {
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

export function markdownToHtml(markdown?: string): string {
  if (!markdown) {
    return ''
  }

  try {
    const processor = unified().use(remarkHtml)
    return processor
      .processSync(markdown)
      .toString()
      .replaceAll('<a ', '<a target="_blank" ')
  } catch {
    return ''
  }
}
