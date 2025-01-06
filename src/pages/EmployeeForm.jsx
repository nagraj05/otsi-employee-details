import React, { useState } from "react";
import Header from "../components/Header";
import {
  Button,
  TextField,
  MenuItem,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EmployeeForm() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const FormField = ({ label, children }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
      <Typography className="text-gray-700 min-w-[200px] text-sm font-medium">
        {label}
      </Typography>
      {children}
    </div>
  );

    const ProfessionalInfo = () => (
      <div>
        <div className="space-y-2 w-1/2">
          <FormField label="Employee ID">
            <TextField
              size="small"
              fullWidth
              className="sm:w-72"
            //   variant="outlined"
            //   label="Employee ID"
            />
          </FormField>
          <FormField label="Employee Name">
            <TextField
              size="small"
              fullWidth
              className="sm:w-72"
            //   variant="outlined"
            //   label="Employee Name"
            />
          </FormField>
          <FormField label="Date of Joining">
            <TextField
              type="date"
              size="small"
              fullWidth
              className="sm:w-72"
              InputLabelProps={{ shrink: true }}
            />
          </FormField>
          <FormField label="Past Experience">
            <TextField
              type="number"
              size="small"
              fullWidth
              className="sm:w-72"
            />
          </FormField>
          <FormField label="OTSI Experience">
            <TextField
              type="number"
              size="small"
              fullWidth
              className="sm:w-72"
            />
          </FormField>
          <FormField label="Total Experience">
            <TextField
              type="number"
              size="small"
              fullWidth
              className="sm:w-72"
            />
          </FormField>
          <FormField label="Designation">
            <TextField size="small" fullWidth className="sm:w-72" />
          </FormField>
          <FormField label="Client/Project">
            <TextField size="small" fullWidth className="sm:w-72" />
          </FormField>
          <FormField label="Project End Date">
            <TextField
              type="date"
              size="small"
              fullWidth
              className="sm:w-72"
              InputLabelProps={{ shrink: true }}
            />
          </FormField>
          <FormField label="Reporting Manager">
            <TextField size="small" fullWidth className="sm:w-72" />
          </FormField>
          <FormField label="Work Location">
            <TextField size="small" fullWidth className="sm:w-72" />
          </FormField>
          <FormField label="Highest Qualification">
            <TextField size="small" fullWidth className="sm:w-72" />
          </FormField>
          <FormField label="Passout Year">
            <TextField
              type="number"
              size="small"
              fullWidth
              className="sm:w-72"
            />
          </FormField>
          <FormField label="Skill Set">
            <TextField
              multiline
              rows={2}
              size="small"
              fullWidth
              className="sm:w-96"
            />
          </FormField>
          <FormField label="Professional Certifications">
            <TextField
              multiline
              rows={2}
              size="small"
              fullWidth
              className="sm:w-96"
            />
          </FormField>
        </div>
      </div>
    );

  const PersonalInfo = () => (
    <div className="space-y-2 w-1/2">
      <FormField label="Personal Email">
        <TextField type="email" size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Gender">
        <TextField select size="small" fullWidth className="sm:w-72">
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
      </FormField>
      <FormField label="Date of Birth">
        <TextField
          type="date"
          size="small"
          fullWidth
          className="sm:w-72"
          InputLabelProps={{ shrink: true }}
        />
      </FormField>
      <FormField label="Blood Group">
        <TextField select size="small" fullWidth className="sm:w-72">
          {bloodGroups.map((group) => (
            <MenuItem key={group} value={group}>
              {group}
            </MenuItem>
          ))}
        </TextField>
      </FormField>
      <FormField label="Present Address">
        <TextField
          multiline
          rows={2}
          size="small"
          fullWidth
          className="sm:w-96"
        />
      </FormField>
      <FormField label="Permanent Address">
        <TextField
          multiline
          rows={2}
          size="small"
          fullWidth
          className="sm:w-96"
        />
      </FormField>
      <FormField label="Contact Number">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Alternate Contact">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Father's Name">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Marital Status">
        <TextField select size="small" fullWidth className="sm:w-72">
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="married">Married</MenuItem>
        </TextField>
      </FormField>
      <FormField label="PAN Number">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Aadhar Number">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
      <FormField label="Passport Number">
        <TextField size="small" fullWidth className="sm:w-72" />
      </FormField>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        buttonName={[
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
            size="small"
          >
            Cancel
          </Button>,
          <Button variant="contained" color="primary" size="small">
            Save
          </Button>,
        ]}
      />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <Paper className="p-6 bg-white rounded-lg shadow-sm">
          <Stepper activeStep={activeStep} className="mb-8">
            <Step>
              <StepLabel>Professional Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Personal Information</StepLabel>
            </Step>
          </Stepper>

          {activeStep === 0 ? <ProfessionalInfo /> : <PersonalInfo />}

          <div className="mt-6 flex justify-between">
            <Button
              color="primary"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(0)}
              size="small"
            >
              Previous
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => (activeStep === 0 ? setActiveStep(1) : null)}
              size="small"
            >
              {activeStep === 0 ? "Next" : "Submit"}
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
