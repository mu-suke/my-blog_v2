import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const formatDate = (targetFormat: string, date: string) => {
  const targetDate = new Date(date)
  return format(targetDate, targetFormat, {
    locale: ja,
  })
}
