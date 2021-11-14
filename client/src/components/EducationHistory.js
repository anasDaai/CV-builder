import React from "react";
import './style.css'
class EducationHistory extends React.Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep()
        console.log(this.props)


    }
    next = e => {
        e.preventDefault()
        this.props.nextStep()
        console.log(this.props)


    }

    render() {
        const values = this.props
        return (
            <div className='center-screen'>
                <div class="card " style={{ width: '50rem' }}>
                    <div class="card-body container">
                        <h2 class="card-title display-3">Education History</h2>
                        <div class='row'>
                        <div class="form-floating mb-3 col">
                            <input name="highschool" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.highschool} />
                            <label for="floatingInput">{'\u205f'} <i class="fas fa-school"></i> High School</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input name="college" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={this.props.value.college} />
                            <label for="floatingInput">{'\u205f'} <i class="fas fa-graduation-cap"></i> College</label>
                        </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                        <select class="form-select mb-3 " aria-label="Default select example">
                            <option name='degree' selected>Degree</option>
                            <option value="1">Baccalaureat</option>
                            <option value="2">Licence </option>
                            <option value="3">Mastère</option>
                            <option value="3">Ingénierie</option>
                            <option value="3">Doctorat</option>
                        </select>
                        </div>
                        </div>
                        
                        <div class="form-floating mb-3 ">
                            <input name="degreeName" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={this.props.value.degreeName} />
                            <label for="floatingInput"> <i class="fas fa-university"></i> Name of degree</label>
                        </div>
                       
                        <div class="form-floating mb-3">
                            <textarea rows="3" name="formation" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={this.props.value.formation} />
                            <label for="floatingInput"> <i class="fas fa-user-graduate"></i> Certificates</label>
                        </div>
                        <div class='row card-footer'>
                        <div class='row'>
                            <div class='col-6'>
                                <button onClick={this.back} class="btn btn-success">back</button>
                            </div>

                            <div class='col-6'>
                                <button onClick={this.next} class="btn btn-success">next</button>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
export default EducationHistory