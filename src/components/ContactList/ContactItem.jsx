import PropTypes from 'prop-types'
import css from "./css/Item.module.css"

export function ContactItem ({name,number,onClick}){


    return (
            <li className={css.item}>
            <p style={{
                display:"inline-block"
            }}>{name}: {number}</p>
            <button type="button" className={css.btn} name={name} onClick={onClick}>Delete</button>
            </li>
        )
}


ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    
    onClick:PropTypes.func.isRequired

}