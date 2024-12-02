import GeneralInformation from './GeneralInformation'
import Education from './Education';
import Practical from './Practical';
import '../styles/cvForm.css'


function CvForm({ general, setGeneral, practical, setPractical, education, setEducation, previewRef }) {

  function handleChange(e, setter, index = null) {
    const { name, value } = e.target;
    if (index !== null) {
      setter((prevArray) =>
        prevArray.map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        )
      )
    } else {
      setter((prevElement) => ({
        ...prevElement,
        [name]: value,
      }));
    }
  }

  function handleAddEducation() {
    setEducation((prevEducation) => [...prevEducation, { school: "", title: "", date: "" },])
  }

  function handleAddCompany() {
    setPractical((prevPractical) => [
      ...prevPractical,
      { company: "", position: "", responsibilities: "", dateFrom: "", dateUntil: "" },
    ]);
  }



  return (
    <form id='form'>

      <h2>General information</h2>
      <GeneralInformation general={general} onChange={(e) => handleChange(e, setGeneral)} />

      <h2>Education</h2>
      {education.map((edu, index) => (
        <Education
          key={index}
          education={edu}
          onChange={(e) => handleChange(e, setEducation, index)}
        />
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add
      </button>

      <h2>Practical Experience</h2>
      {practical.map((prac, index) => (
        <Practical
          key={index}
          practical={prac}
          onChange={(e) => handleChange(e, setPractical, index)}
        />
      ))}
      <button type="button" onClick={handleAddCompany}>
        Add
      </button>
    </form>
  )
}

export default CvForm
