import PropTypes from 'prop-types'

function Home({ greetings, name, shortNote }) {
  return (
    <>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-sm-12 mt-lg-0 mt-4'>
          <span className='title-small'> {greetings} </span>
          <h1 className='text-6xl-white font-bold'> {name} </h1>
          <span> {shortNote} </span>
        </div>
      </div>
    </>
  )
}

Home.defaultProps = {
  greetings: 'Hi there,',
  name: "I'm Edwin Kamasah Jnr, A Front-End developer ",
  shortNote: 'I am an IT personell, with expertise in  Front-End development',
}

export default Home
