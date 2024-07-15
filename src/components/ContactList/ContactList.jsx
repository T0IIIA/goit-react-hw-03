import s from './ContactList.module.css'
import Contact from '../Contact/Contact'


const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map((obj) => (
        <li className={s.item} key={obj.id}>
          <Contact contacts={obj} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList





