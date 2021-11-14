import React from "react";
import EducationHistory from "./EducationHistory";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import './style.css'
import Skills from "./Skills";
import axios from "axios";
import {saveAs} from 'file-saver'
class Resume extends React.Component {
   constructor(){
       super()
       this.state = {
        step: 1,
        firstname:'',
        lastname:'',
        birthdate:'',
        email:'',
        phone:'',
        city:'',
        zipcode:'',
        facebook:'',
        instagram:'',
        linkedin:'',
        highschool:'',
        college:'',
        degreeName:'',
        formation:'',
        institute1: '',
        position1: '',
        duration1: '',
        description1:'',
        institute2: '',
        position2: '',
        duration2: '',
        description2:'',
        hardskills:'',
        softskills:'',
        english:'',
        frensh:'',
        german:'',
        spanish:'',
        }     
   }
    render(){
        let step=this.state.step
        const values=this.state
        const nextStep = () => {
            const {step} = this.state;
            this.setState ({
            step: step + 1,
            });
            };
        const prevStep= () => {
            const {step} = this.state;
            this.setState ({
            step: step - 1,
            }); 
            };
           
        const handleChange = ({target: {value, name}}) => {
            this.setState ({[name]: value});
            console.log({value, name})
            
            };
          const sendAndRecieve = ()=>{
            axios
            .post ('http://localhost:5000/API/', values)
            .then (() => {
              axios
                .get ('http://localhost:5000/API/resume', {responseType: 'blob'})
                .then (res => {
                  const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
                  saveAs(pdfBlob,`${values.firstname}\'s Resume.pdf`);
                })
                .catch (err => {
                  console.log (err);
                });
            })
            .catch (err => {
              console.log (err);
            });
        };

            switch( step){
                case 1: return(<PersonalDetails value={values} onChange={handleChange} nextStep={nextStep} prevStep={prevStep} />)
            
                break
                case 2: return(<EducationHistory value={values} onChange={handleChange} nextStep={nextStep} prevStep={prevStep} />)
                 break
                 case 3: return(<Skills value={values} onChange={handleChange} nextStep={nextStep} prevStep={prevStep} />)
                 break
                 case 4: return(<Experience value={values} onChange={handleChange} send={sendAndRecieve} prevStep={prevStep} />)
                 break
                default: return(<div>error</div>)
    }
}
}
export default Resume