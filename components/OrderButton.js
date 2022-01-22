import { useState } from "react"
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi"

export default function OrderButton({ click }) {
  const [asc, setAsc] = useState(false)

  return (
    <div
      onClick={() => {
        setAsc(!asc)
        click()
      }}
      className='flex items-center cursor-pointer bg-white drop-shadow-md rounded p-1'
    >
      Order
      <span className='font-bold text-xl'>
        {asc ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
      </span>
    </div>)
}