import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const getSeverityClass = (level) => {
  switch (level) {
    case 'Normal':
      return 'severity-normal';
    case 'Moderate':
      return 'severity-moderate';
    case 'Severe':
      return 'severity-severe';
    case 'Extremely Severe':
      return 'severity-extremely-severe';
    default:
      return '';
  }
};

function RadioInput({ name, value, checked, onChange }) {
  return (
    <label>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} required/>
      {parseInt(value)}
    </label>
  );
}

function generateRadioInputs(name, values, checkedValue, onChange) {
  return values.map((value) => (
    <RadioInput
      key={value}
      name={name}
      value={value}
      checked={checkedValue === value}
      onChange={onChange}
    />
  ));
}

function App() {
  const responseValues = ['Normal', 'Moderate', 'Severe', 'Extremely Severe'];

  const [depression_level, setDepressionLevel] = useState(null);
  const [stress_level, setStressLevel] = useState(null);
  const [anxiety_level, setAnxietyLevel] = useState(null);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [fullName, setFullName] = useState('');
  const [education, setEducation] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('');
  const [windDown, setWindDown] = useState('');
  const [dryness, setdryness] = useState('');
  const [positiveness, setPositiveness] = useState('')
  const [breathlesness, setBreathlessness] = useState('')
  const [difficultToWork, setWorkDifficulty] = useState('')
  const [overReact, setOverReact] = useState('')
  const [trembling, setTrembling] = useState('')
  const [nervousEnergy, setNervousEnergy] = useState('')
  const [selfFooling, setSelfFooling] = useState('')
  const [lookForward, setLookForward] = useState('')
  const [agitated, setAgitated] = useState('')
  const [difficultToRelax, setRelaxDifficulty] = useState('')
  const [feltBlue, setFeltBlue] = useState('')
  const [intolerant, setIntolerant] = useState('')
  const [panic, setPanic] = useState('')
  const [enthusiast, setEnthusiast] = useState('')
  const [worth, setWorth] = useState('')
  const [touchy, setTouchy] = useState('')
  const [heart, setHeart] = useState('')
  const [scared, setScared] = useState('')
  const [meaninglessness, setMeaninglessness] = useState('');

  const handleChangeMeaninglessness = (event) => {
    setMeaninglessness(event.target.value);
  };

  const handleChangeWindDown = (event) => {
    setWindDown(event.target.value);
  };

  const handleChangeDryness = (event) => {
    setdryness(event.target.value);
  };

  const handleChangePositiveness = (event) => {
    setPositiveness(event.target.value);
  };

  const handleChangeBreathlesness = (event) => {
    setBreathlessness(event.target.value)
  };

  const handleChangeDifficultToWork = (event) => {
    setWorkDifficulty(event.target.value)
  };

  const handleChangeOverReact = (event) => {
    setOverReact(event.target.value)
  };

  const handleChangeTrembling = (event) => {
    setTrembling(event.target.value)
  };

  const handleChangeNervousEnergy = (event) => {
    setNervousEnergy(event.target.value)
  };

  const handleChangeSelfFooling = (event) => {
    setSelfFooling(event.target.value)
  };


  const handleChangeLookForward = (event) => {
    setLookForward(event.target.value);
  };

  const handleChangeAgitated = (event) => {
    setAgitated(event.target.value);
  };

  const handleChangeRelaxDifficulty = (event) => {
    setRelaxDifficulty(event.target.value);
  };

  const handleChangeFeltBlue = (event) => {
    setFeltBlue(event.target.value);
  };

  const handleChangeIntolerant = (event) => {
    setIntolerant(event.target.value)
  };

  const handleChangePanic = (event) => {
    setPanic(event.target.value)
  };

  const handleChangeEnthusiast = (event) => {
    setEnthusiast(event.target.value)
  };

  const handleChangeWorth = (event) => {
    setWorth(event.target.value)
  };

  const handleChangeTouchy = (event) => {
    setTouchy(event.target.value)
  };

  const handleChangeHeart = (event) => {
    setHeart(event.target.value)
  };
  
  const handleChangeScared = (event) => {
    setScared(event.target.value)
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform API call or submit data to backend here
    const payload = {
      name: fullName,
      age: parseInt(age),
      marital: parseInt(maritalStatus),
      education: parseInt(education),
      gender: parseInt(gender), // Assuming a static value for gender, modify as needed
      q1a: parseInt(windDown),
      q2a: parseInt(dryness),
      q3a: parseInt(positiveness),
      q4a: parseInt(breathlesness),
      q5a: parseInt(difficultToWork),
      q6a: parseInt(overReact),
      q7a: parseInt(trembling),
      q8a: parseInt(nervousEnergy),
      q9a: parseInt(selfFooling),
      q10a: parseInt(lookForward),
      q11a: parseInt(agitated),
      q12a: parseInt(difficultToRelax),
      q13a: parseInt(feltBlue),
      q14a: parseInt(intolerant),
      q15a: parseInt(panic),
      q16a: parseInt(enthusiast),
      q17a: parseInt(worth),
      q18a: parseInt(touchy),
      q19a: parseInt(heart),
      q20a: parseInt(scared),
      q21a: parseInt(meaninglessness),
    };
    console.log(payload)

    try {
      const response = await fetch('https://api.mixerml.com/DASPridict', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`)
      }
      
      const result = await response.json();
      console.log(result)
      setDepressionLevel(result.deprission_level)
      setStressLevel(result.stress_level)
      setAnxietyLevel(result.anxiety_level)
      setFormSubmitted(true);

    } catch (err) {
      console.error(err)
    }

    // console.log(payload)
    // Reset form fields
    // setFullName('');
    // setEducation('');
    // setAge('');
    // setMaritalStatus('');
    // setMeaninglessness('');
  };

  return (
    <div>
     { formSubmitted ? (
      <div>
      <h2>Based on the questionare you filled, the result is:</h2>
    <div className='result'>
      <p><span className='key'>Name</span> : <span className='value'>{fullName}</span></p>
      <p><span className='key'>Depression Level</span> : <span className={`${getSeverityClass(depression_level)}`}>{depression_level}</span></p>
      <p><span className='key'>Stress Level</span> : <span className={` ${getSeverityClass(stress_level)}`}>{stress_level}</span></p>
      <p><span className='key'>Anxiety Level</span> : <span className={` ${getSeverityClass(anxiety_level)}`}>{anxiety_level}</span></p>
    </div>

    </div>
     ) : (
      <div>
      <h1>DASS-21</h1>
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>


        <div className="form-row">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <div className="form-row">
        <label htmlFor="education">Education:</label>
        <select id="education" value={education} onChange={(e) => setEducation(e.target.value)} required>
          <option value="">Select</option>
          <option value="1">Less than High School</option>
          <option value="2">High School</option>
          <option value="3">University Degree</option>
          <option value="4">Graduation Degree</option>

        </select>
        </div>
        
        <div className="form-row">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
        </div>
        
        <div className="form-row">
        <label htmlFor="maritalStatus">Marital Status:</label>
        <select id="maritalStatus" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} required>
          <option value="">Select</option>
          <option value="1">Never Married</option>
          <option value="2">Currently Married</option>
          <option value="3">Previously Married</option>

        </select>
        </div>
        
        <div className="form-row">
        <label htmlFor="windDown">I found it hard to wind down:</label>
        <div>
        {generateRadioInputs('windDown', ['0', '1', '2', '3'], windDown, handleChangeWindDown)}
        </div>
        </div>
        
        <div className="form-row">
        <label htmlFor="dryness">I was aware of dryness of my mouth:</label>
        <div>
        {generateRadioInputs('dryness', ['0', '1', '2', '3'], dryness, handleChangeDryness)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="positiveness">I couldn’t seem to experience any positive feeling at all</label>
        <div>
        {generateRadioInputs('positiveness', ['0', '1', '2', '3'], positiveness, handleChangePositiveness)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="breathlesness">I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)</label>
        <div>
        {generateRadioInputs('breathlesness', ['0', '1', '2', '3'], breathlesness, handleChangeBreathlesness)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="difficultToWork">I found it difficult to work up the initiative to do things</label>
        <div>
        {generateRadioInputs('difficultToWork', ['0', '1', '2', '3'], difficultToWork, handleChangeDifficultToWork)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="overReact">I tended to over-react to situations</label>
        <div>
        {generateRadioInputs('overReact', ['0', '1', '2', '3'], overReact, handleChangeOverReact)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="trembling">I experienced trembling (eg, in the hands)</label>
        <div>
        {generateRadioInputs('trembling', ['0', '1', '2', '3'], trembling, handleChangeTrembling)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="nervousEnergy">I felt that I was using a lot of nervous energy</label>
        <div>
        {generateRadioInputs('nervousEnergy', ['0', '1', '2', '3'], nervousEnergy, handleChangeNervousEnergy)}
        </div>
        </div>


        <div className="form-row">
        <label htmlFor="selfFooling">I was worried about situations in which I might panic and make a fool of myself</label>
        <div>
        {generateRadioInputs('selfFooling', ['0', '1', '2', '3'], selfFooling, handleChangeSelfFooling)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="lookForward">I felt that I had nothing to look forward to</label>
        <div>
        {generateRadioInputs('lookForward', ['0', '1', '2', '3'], lookForward, handleChangeLookForward)}
        </div>
        </div>


        <div className="form-row">
        <label htmlFor="agitated">I found myself getting agitated</label>
        <div>
        {generateRadioInputs('agitated', ['0', '1', '2', '3'], agitated, handleChangeAgitated)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="difficultToRelax">I found it difficult to relax</label>
        <div>
        {generateRadioInputs('difficultToRelax', ['0', '1', '2', '3'], difficultToRelax, handleChangeRelaxDifficulty)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="feltBlue">I felt down-hearted and blue</label>
        <div>
        {generateRadioInputs('feltBlue', ['0', '1', '2', '3'], feltBlue, handleChangeFeltBlue)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="intolerant">I was intolerant of anything that kept me from getting on with what I was doing</label>
        <div>
        {generateRadioInputs('intolerant', ['0', '1', '2', '3'], intolerant, handleChangeIntolerant)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="panic">I felt I was close to panic</label>
        <div>
        {generateRadioInputs('panic', ['0', '1', '2', '3'], panic, handleChangePanic)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="enthusiast">I was unable to become enthusiastic about anything</label>
        <div>
        {generateRadioInputs('enthusiast', ['0', '1', '2', '3'], enthusiast, handleChangeEnthusiast)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="worth">I felt I wasn’t worth much as a person</label>
        <div>
        {generateRadioInputs('worth', ['0', '1', '2', '3'], worth, handleChangeWorth)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="touchy">I felt that I was rather touchy</label>
        <div>
        {generateRadioInputs('touchy', ['0', '1', '2', '3'], touchy, handleChangeTouchy)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="heart">I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)</label>
        <div>
        {generateRadioInputs('heart', ['0', '1', '2', '3'], heart, handleChangeHeart)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="scared">I felt scared without any good reason</label>
        <div>
        {generateRadioInputs('scared', ['0', '1', '2', '3'], scared, handleChangeScared)}
        </div>
        </div>

        <div className="form-row">
        <label htmlFor="meaninglessness">I felt that life was meaningless:</label>
        <div>
        {generateRadioInputs('meaninglessness', ['0', '1', '2', '3'], meaninglessness, handleChangeMeaninglessness)}
        </div>
        </div>
      <button type="submit" className="button">Submit</button>

      </form>
      </div>

      </div>
        
      )}

    </div>

  );
}



export default App;