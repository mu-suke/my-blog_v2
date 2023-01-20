import { format, utcToZonedTime } from 'date-fns-tz'

export const formatDateJst = (targetFormat: string, date: string) => {
  const targetDate = utcToZonedTime(date, 'Asia/Tokyo')
  return format(targetDate, targetFormat, {
    timeZone: 'Asia/Tokyo',
  })
}
