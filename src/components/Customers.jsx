import { useDispatch, useSelector } from "react-redux"; 
import Card from 'react-bootstrap/Card';
import { NavLink, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Customers = () => {

  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers)
  console.log(customers);

  const addCustomers = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({type: "ADD_CUSTOMERS", payload: customer})
  }

  const removeCustomer = (customer) => {
    dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
  }

  return (
    <div className="container my-5">
      <CardNavbar addCustomers={addCustomers} >
        <div className="my-5">
          {customers.length > 0 
            ?
            <div>
              {customers.map(customer => (
                <div className="my-3 cursor-pointer border-bottom"
                onClick={() => removeCustomer(customer)}
                
                >{customer.name}</div>
              ))}
            </div>
            :
            <p>Clients missing</p>
          }
        </div>
      </CardNavbar>
    </div>
  );
}


export default Customers;




function CardNavbar({children, addCustomers, ...props}) {
  
  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link as={NavLink} to="./active">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/link">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Output something</Card.Title>
          <Card.Text>
            {children}
          </Card.Text>
          <Button variant="primary"
          onClick={() => addCustomers(prompt())} {...props}
          >Add customer</Button>
        </Card.Body>
      </Card>
      <Outlet />
    </>
    

  )
}

