import React from "react";
import './style.css'

class PersonalDetails extends React.Component {
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
                <div class="card " style={{ width: '50rem' }}>
                    <div class="card-body">
                        <h2 class="card-title display-3">Personal Details</h2>
                        <form class="form-floating mb-3 container needs-validation" novalidate>
                            <div class='row'>
                                <div class="form-floating mb-3  col" > 
                                
                                    <input type="firstname"  name='firstname' class="form-control" id="floatingfirstname" placeholder="firstname" onChange={this.props.onChange} value={values.value.firstname} required/>
                                    <label for="floatingfirstname">{'\u205f'} <i class="far fa-user"></i> First name
                                    </label> 
                                </div>
                                <div class="form-floating mb-3 col">
                                    <input type="text" class="form-control" name='lastname' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.lastname} required/>
                                    <label for="floatingInput">{'\u205f'} <i class="fas fa-user"></i>Last name</label>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                            
                                <input type="birthdate" class="form-control" name='birthdate' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.birthdate} />
                                <label for="floatingInput"> <i class="fas fa-birthday-cake"></i> Birthdate</label>
                            </div>
                            <div class='row'>
                                <div class="form-floating mb-3 col">
                                    <input type="email" class="form-control" name='email' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.email} />
                                    <label for="floatingInput">{'\u205f'} <i class="far fa-envelope"></i> Email address </label>
                                </div>
                                <div class="form-floating mb-3 col-4 ">
                                    <input type="phone" class="form-control" name='phone' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.phone} />
                                    <label for="floatingInput">{'\u205f'}<i class="fas fa-phone"></i> Phone Number</label>
                                </div>
                            </div>
                            <div class='row'>
                                <div class="form-floating mb-3 col-6">
                                    <input type="city" class="form-control" name='city' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.city} />
                                    <label for="floatingInput">{'\u205f'} <i class="fas fa-city"></i> city</label>
                                </div>
                                <div class="form-floating mb-3 col-3">
                                    <input type="zipcode" class="form-control" name='zipcode' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.zipcode} />
                                    <label for="floatingInput">{'\u205f'} <i class="fas fa-map-marker-alt"></i> zipcode</label>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="facebook" class="form-control" name='facebook' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.facebook} />
                                <label for="floatingInput"> <i class="fab fa-facebook"></i> Facebook</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="instagram" class="form-control" name='instagram' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.instagram} />
                                <label for="floatingInput"> <i class="fab fa-instagram"></i> Instagram</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="linkedin" class="form-control" name='linkedin' id="floatingInput" placeholder="name@example.com" onChange={this.props.onChange} value={values.value.linkedin} />
                                <label for="floatingInput"> <i class="fab fa-linkedin"></i> Linkedin</label>
                            </div>
                            <div class='row card-footer'>
                            <div class='col-6'>
                                <button type='submit' class="btn btn-success">back</button>
                            </div>

                            <div class='col-6'>
                                <button type='submit' onClick={this.next} class="btn btn-success">next</button>
                            </div>
                        </div>
                        </form>
                       
                    </div>
                </div>

            </div>
        )
    }
}
export default PersonalDetails