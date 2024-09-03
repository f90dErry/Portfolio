import f90 from '/images/f90.png'

function Home({ greetings, fullName, shortNote, fed }) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='col-lg-6 col-sm-12 mt-lg-0 mt-4'>
        <span className='title-small'> {greetings} </span>
        <h1 className='text-white  text-2xl md:text-4xl'>
          {fullName}
          {/* <span className='font-thin'>I'm </span>
          <div className='font-bold'>Edwin Kamasah Jnr</div> */}
        </h1>
        <p>{fed}</p>
        <span>{shortNote}</span>
      </div>
      <div
        className='w-[360px] h-[360px] md:w-[600px] md:h-[600px] rounded-full bg-gray-300'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        }}
      >
        <img src={f90} alt='derry' className='object-fill' />
      </div>
    </div>
  )
}

Home.defaultProps = {
  greetings: 'Hi there,',
  fullName: "I'm Edwin Kamasah Jnr,",
  fed: 'A Front-End developer ',
  shortNote: 'I am an IT personell, with expertise in  Front-End development',
}

export default Home
