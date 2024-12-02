import CvForm from './components/CvForm'
import './App.css'
import Preview from './components/preview';
import { useState } from 'react';

function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState([{ school: "", title: "", date: "" }]);
  const [practical, setPractical] = useState([{ company: "", position: "", responsibilities: "", dateFrom: "", dateUntil: "" }]);

  return (
    <main id='main'>
      <CvForm
        general={general}
        setGeneral={setGeneral}
        education={education}
        setEducation={setEducation}
        practical={practical}
        setPractical={setPractical}
      />
      <Preview
        general={general}
        education={education}
        practical={practical}
      />
    </main >
  )
}

export default App
