import { Nav } from 'react-bootstrap'
import storeImg from '../assests/images/services1.svg'
// import groceryImg from '../assests/images/services2.svg'
import cafeImg from '../assests/images/services3.svg'
import foodImg from '../assests/images/services4.svg'
import { store, grocery , food,cafe } from '../redux/slice/appSlice.js'
import { useDispatch } from 'react-redux'

function ServicesBtn() {
  const dispatch = useDispatch()
  return (
    <Nav fill variant="tabs" defaultActiveKey="store">
      <Nav.Item onClick={()=>dispatch(store())}>
        <Nav.Link eventKey="store">
          <div className='servicesBtn'>
            <img src={storeImg} alt="services-icon" />
            <p>Store</p>
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>dispatch(grocery())}>
        <Nav.Link eventKey="grocery">
          <div className='servicesBtn'>
            <img src={storeImg} alt="services-icon" />
            <p>Grocery</p>
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>dispatch(cafe())}>
        <Nav.Link eventKey="cafe">
          <div className='servicesBtn'>
            <img src={cafeImg} alt="services-icon" />
            <p>Cafe</p>
          </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>dispatch(food())}>
        <Nav.Link eventKey="food" >
          <div className='servicesBtn'>
            <img src={foodImg} alt="services-icon" />
            <p>Food</p>
          </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default ServicesBtn