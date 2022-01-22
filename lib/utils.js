import { BiFemale, BiMale } from 'react-icons/bi'
import { MdFamilyRestroom } from 'react-icons/md'

export function getDateString(date) {
    try {
      return [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/')
    } catch {
      return '5/21/2002'
    }
}

export function gender(gender) {
  switch (gender) {
    case 'Neutral':
      return (
        <><BiFemale /> / <BiMale /> </>
      )

    case 'Family':
      return (
        <><MdFamilyRestroom /></>
      )

    case 'Male':
      return (
        <><BiMale /></>
      )

    case 'Female':
      return (
        <><BiFemale /></>
      )

    default:
      return <></>
  }
}