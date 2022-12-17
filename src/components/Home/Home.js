import { Link } from "react-router-dom"
import img from "../../img/phonebook.png"
import css from "../Home/Home.module.css"
const Home=()=>{
return(
    <>
    <h1 className={css.header}>Phonebook</h1>
    <div className={css.text}>
       
        <p>Create new account</p>
        <Link to="/register" className={css.link}>Register</Link>
        <p>Log in, if you have already registered</p>
        <Link to="/login" className={css.link}>Log in</Link>
        
    </div>
    <img alt="header" src={img} className={css.img} height={420}/>
    </>
    
)
}
export default Home