import img from "../../img/avatar.jpg"
import { useSelector } from "react-redux"
import {selectUser} from "../../redux/auth/auth-selectors"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/auth-operations"
import css from "../UserMenu/UserMenu.module.css"
const UserMenu=()=>{
    const dispatch=useDispatch()
    const user=useSelector(selectUser)
    const handleSubmit=()=>{
        dispatch(logOut())
    }
return(
    <>
    <div className={css.wrapper}>
        <img alt="avatar" className={css.img} src={img} width={30} height={30}/>
        <span className={css.text}>Welcome, {user.name} </span>
        <button className={css.button} onClick={handleSubmit} type="button">Log out</button>
    </div></>
)
}
export default UserMenu