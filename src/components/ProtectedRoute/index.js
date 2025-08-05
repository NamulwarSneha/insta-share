import Cookies from 'js-cookie'
import {Navigate, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwt = Cookies.get('jwt_token')
  // console.log(jwt)
  if (jwt === undefined) {
    return <Navigate to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute