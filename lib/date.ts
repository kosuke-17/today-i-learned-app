import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export const formatYYYYMMDD = (date: Date) => {
  return dayjs(date).format('YYYY年MM月DD日')
}
