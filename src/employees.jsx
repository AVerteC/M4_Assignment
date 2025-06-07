import React from 'react'
import ReactDOM from 'react-dom'
import EmployeeList from './EmployeeList.jsx'

class EmployeeFilter extends React.Component {
    render() {
        return (<div>This is a placeholder for the employee filter.</div>)
    }
}

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
)