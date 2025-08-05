// src/withRouter.js
import {useNavigate, useParams, useLocation} from 'react-router-dom'

const withRouter = WrappedComponent => {
  return props => {
    const navigate = useNavigate()
    const params = useParams()
    const location = useLocation()

    return (
      <WrappedComponent
        {...props}
        navigate={navigate}
        params={params}
        location={location}
      />
    )
  }
}

export default withRouter
