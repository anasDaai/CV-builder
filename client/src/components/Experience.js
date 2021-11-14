import React from "react";
import './style.css'
class Experience extends React.Component {
    back = e =>{
        e.preventDefault()
        this.props.prevStep()
        console.log(this.props)
       

    }
    next = e =>{
        e.preventDefault()
        this.props.send()
        console.log(this.props)
       

    }
    

    render() {
        const values= this.props
        console.log(values.value)

        return (
            <div className='center-screen'>
                <div class="card " style={{ width: '60rem' }}>
                    <div class="card-body container">
                        <h2 class="card-title display-3">Work Experience</h2>
                        <div>
                        <h3 style={{position:'relative',right:'23rem'}} class='mb-2'> Experience 1</h3>
                        <div class='row'>
                        <div class="form-floating mb-3 col">
                        <input  name='institute1' class="form-control" id="floatingfirstname" placeholder="institute1" onChange={this.props.onChange} value={this.props.value.institute1}/>
                            <label for="floatingfirstname">{'\u205f'}{'\u205f'} <i class="fas fa-building"></i> institute</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="position1" class="form-control" name='position1' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.position1} />
                            <label for="floatingInput">{'\u205f'}{'\u205f'} <i class="fas fa-crosshairs"></i> position</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="duration" class="form-control" name='duration1' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.duration1} />
                            <label for="floatingInput">{'\u205f'}{'\u205f'}<i class="far fa-calendar-alt"></i> duration</label>
                        </div>
                        </div>
                        <div class="form-floating mb-3">
                        <input type="description" class="form-control" name='description1' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.description1} />
                            <label for="floatingInput"><i class="fas fa-book"></i> description</label>
                            </div>
                            </div>
                            <div>
                        <h3 style={{position:'relative',right:'23rem'}} class='mb-2'> Experience 2</h3>
                        <div class='row'>
                        <div class="form-floating mb-3 col">
                        <input  name='institute2' class="form-control" id="floatingfirstname" placeholder="institute2" onChange={this.props.onChange} value={values.value.institute2}/>
                            <label for="floatingfirstname">{'\u205f'}{'\u205f'} <i class="fas fa-building"></i> institute</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="position2" class="form-control" name='position2' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.position2} />
                            <label for="floatingInput">{'\u205f'}{'\u205f'} <i class="fas fa-crosshairs"></i> position</label>
                        </div>
                        <div class="form-floating mb-3 col">
                            <input type="duration" class="form-control" name='duration2' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.duration2} />
                            <label for="floatingInput">{'\u205f'}{'\u205f'}<i class="far fa-calendar-alt"></i> duration</label>
                        </div>
                        </div>
                        <div class="form-floating mb-3">
                        <input type="description2" class="form-control" name='description2' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.description2} />
                            <label for="floatingInput"><i class="fas fa-book"></i> description</label>
                            </div>
                            </div>
                            <div class='row card-footer'>
                            <div class='row'>
                            <div class='col-6'>
                                <button onClick={this.back} class="btn btn-success">back</button>
                            </div>

                            <div class='col-6'>
                                <button  onClick={this.next}  class="btn btn-success">next</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                   
                </div>
               
            </div>
        )
    }
}
export default Experience