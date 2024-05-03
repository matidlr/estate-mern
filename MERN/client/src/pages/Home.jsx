import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* top */}
      <div className="">
      <h1>
        Find your next <span>perfect</span>
        <br/>
        place with ease
      </h1>
      <div className="">
        This Real Estate site is the best place to find your next perfect place to live.
        <br/>
        We have a wide range of properties for you to choose from
      </div>
      <Link to={'/search'}>
        Let's get started
      </Link>
      </div>
    </div>
  )
}

export default Home;