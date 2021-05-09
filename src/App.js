import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

const EmployeeInfo = [
  {
    firstName: "Nayana",
    lastName: "W",
    employeeID: 1
  },
  {
    firstName: "Bruce",
    lastName: "W",
    employeeID: 2
  },
  {
    firstName: "Tony",
    lastName: "S",
    employeeID: 3
  },
  {
    firstName: "Elon",
    lastName: "M",
    employeeID: 4
  }

]



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Counter</h2>
        {
          EmployeeInfo.map(employee => {
            // const { firstName, lastName } = employee;
            return (
              // <Employee firstName={firstName} lastName={lastName} />
              <Employee key={employee.employeeID} {...employee} />// using spread operator
            );
          })
        }
      </header>
    </div>
  );
}

export default App;