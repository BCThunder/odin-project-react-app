import { useState } from 'react'
import './App.css'

import GeneralInfo from './GeneralInfo.jsx';
import EducationInfo from './EducationInfo.jsx';
import ExperienceInfo from './ExperienceInfo.jsx';
import ResumeDisplay from './ResumeDisplay.jsx';

function App() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolCompletedDate, setSchoolCompletedDate] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const onSubmitButtonClick = () =>  {
    setSubmitted(true);
  };

  return (
    <div className="App">
      <div className="column">
        <h1>Make a Resume</h1>
        <GeneralInfo
          fullName={fullName}
          setFullName={setFullName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
        />

        <EducationInfo
          school={school}
          setSchool={setSchool}
          degree={degree}
          setDegree={setDegree}
          schoolCompletedDate={schoolCompletedDate}
          setSchoolCompletedDate={setSchoolCompletedDate}
        />

        <ExperienceInfo
          companyName={companyName}
          setCompanyName={setCompanyName}
          positionTitle={positionTitle}
          setPositionTitle={setPositionTitle}
          responsibilities={responsibilities}
          setResponsibilities={setResponsibilities}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <button
          type="button"
          onClick={onSubmitButtonClick}
        >
          Submit
        </button>
      </div>
      
      <div className="column">
        <ResumeDisplay
          submitted={submitted}
          fullName={fullName}
          phoneNumber={phoneNumber}
          email={email}

          school={school}
          degree={degree}
          schoolCompletedDate={schoolCompletedDate}

          companyName={companyName}
          positionTitle={positionTitle}
          responsibilities={responsibilities}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}

export default App;