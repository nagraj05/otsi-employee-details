import React from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function EmployeeList() {
    const navigate = useNavigate()
  return (
      <div>
          <Header buttonName={[
              <Button variant="contained" color="primary" onClick={()=> navigate("/employee-form")}>
                    Form
              </Button>
          ]} />
      Employee List
    </div>
  )
}
