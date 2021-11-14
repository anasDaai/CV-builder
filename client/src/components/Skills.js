import React from "react";
import './style.css'

class Skills extends React.Component {
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
        console.log(values.value)

        return (
            <div className='center-screen'>
                <div class="card " style={{ width: '60rem' }}>
                    <div class="card-body container">
                        <h2 class="card-title display-3">Skills</h2>
                        <div class='row mb-3' style={{ position: 'relative', left: '10em' }}>
                            <div class="card col-4" >
                                <div class="card-body">
                                    <h5 class="card-title">Hard Skills</h5>
                                    <textarea onChange={this.props.onChange} value={values.value.hardskills} name='hardskills' placeholder='write a short paragraph describing your hard skills' rows='8' className='parag'></textarea>
                                </div>

                            </div>
                            <div class="card col-4" >
                                <div class="card-body">
                                    <h5 class="card-title">Soft Skills</h5>
                                    <textarea onChange={this.props.onChange} value={values.value.softskills} name='softskills' placeholder='write a short paragraph describing your soft skills' rows='8' className='parag'></textarea>

                                </div>
                            </div>
                        </div>
                        <div class="card col-4" style={{ position: 'relative', left: '20em' }} >
                            <div class="card-body">
                                <h5 class="card-title">Languages</h5>
                                <label for="customRange3" class="form-label">English</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" name='english' onChange={this.props.onChange} value={values.value.english}></input>
                                <label for="customRange3" class="form-label">Frensh</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"  name='frensh' onChange={this.props.onChange} value={values.value.frensh}></input>
                                <label for="customRange3" class="form-label">German</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"  name='german' onChange={this.props.onChange} value={values.value.german}></input>
                                <label for="customRange3" class ="form-label">Spanish</label>
                                <input type ="range" class ="form-range" min="0" max="5" step="0.5" id="customRange3"  name='spanish' onChange={this.props.onChange} value={values.value.spanish}>
                                </input>
                            </div>
                        </div>













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
        )
    }
}
export default Skills