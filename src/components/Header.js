import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header

// You can style stuff inline with variables if you want to.
// const headingStyle = {
//   color: 'green',
//   backgroundColor: 'pink'
// }








