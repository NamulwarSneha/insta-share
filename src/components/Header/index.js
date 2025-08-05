import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    const {onSearch} = this.props
    onSearch(searchInput)
  }

  onClickLogout = () => {
    const {navigate} = this.props
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }

  render() {
    const {searchInput} = this.state

    return (
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </Link>

            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-menu-item search-bar">
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <button
                type="button"
                className="search-button"
                onClick={this.onClickSearchIcon}
              >
                <BsSearch />
              </button>
            </li>
          </ul>

          <button
            type="button"
            className="logout-mobile-btn"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    )
  }
}

// Wrapper for injecting navigate prop into class component
const HeaderWithNavigate = props => {
  const navigate = useNavigate()
  return <Header {...props} navigate={navigate} />
}

export default HeaderWithNavigate
