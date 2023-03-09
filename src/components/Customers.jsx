import { useDispatch, useSelector } from "react-redux"; 
import Card from 'react-bootstrap/Card';
import { NavLink, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { addCustomersAction, removeCustomersAction } from "../store/customersReducer";

const Customers = () => {

  const dispatch = useDispatch()
  const customers = useSelector(state => state.customers.customers)
  
  const addCustomers = (name) => {
    const customers = {
      name,
      id: Date.now()
    }
    dispatch(addCustomersAction(customers))
  }

  const removeCustomers = (customer) => {
    dispatch(removeCustomersAction(customer.id))
  }

  return (
    <div className="container my-5">
      <CustomerComponent addCustomer={addCustomers}>
        {customers.length > 0 
          ? 
          <ul>{customers.map(customer => (
            <li key={customer.key}
            onClick={() => removeCustomers(customer)}
            className="list-unstyled"
            >{customer.name}</li>
          ))}</ul>
          :
          <p>Clients are missing</p>
        }
      </CustomerComponent>
      
    </div>
  );
}


export default Customers;




const CustomerComponent = ({children, addCustomer}) => {

  return(
  <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">{children}</p>
    <a href="#" class="btn btn-primary"
    onClick={() => addCustomer(prompt())}
    >Add customer</a>
  </div>
</div>
)}


