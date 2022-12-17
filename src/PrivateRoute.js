import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
export default function PrivateRoute({component:Component}){
const isLoggedIn=useSelector(selectIsLoggedIn)
return(
    <>
       {isLoggedIn ? Component : <Navigate to="/login"/>}
       </>
)
}