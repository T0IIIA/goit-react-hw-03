import s from './Contact.module.css'
import { FaSquarePhone, FaCircleUser } from "react-icons/fa6"

const Contact = ({ contacts }) => {
  const { name, number} = contacts

  return (
    <>
      <div className={s.contact}>
        <p className={s.name}> <FaCircleUser className={s.user} /> {name}</p>
        <a href={`tel:${number}`} className={s.phoneNumber}> <FaSquarePhone className={s.phone} /> {number}</a>
      </div>
      <button type='submit' className={s.deleteBtn}> Delete </button>
    </>
  )
}

export default Contact