import './ReloadMoviesButton.css'

const ReloadMoviesButton = (props) => {
  return (
    <button className='main-reload-btn' onClick ={props.reload}>Obnoviť filmy</button>
  )
}

export default ReloadMoviesButton