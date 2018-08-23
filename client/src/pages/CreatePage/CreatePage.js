import React, { Component } from "react";
import "./CreatePage.css"

// import API from "../../utils/API";
// import { Link } from "react-router-dom";

import Nav from "../../components/Nav";
import banner from "./balcony.jpg"
import { Form, Header, Icon } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
class CreatePage extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

    
  render() {
    const { value } = this.state
    return (
    <div>
        <Nav />
        
        <div className ="container container-create">
        <Header as='h2'>
          <Icon name='user circle' />
          <Header.Content>
            Create a Tribute Memorial
            <Header.Subheader>Add your loved one's information below</Header.Subheader>
          </Header.Content>
        </Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Date of Birth' placeholder='mm/dd/yyyy' />
              <Form.Input fluid label='Date of Passing' placeholder='mm/dd/yyyy' />
            </Form.Group>

          
            <Form.TextArea label='Description' placeholder='Tell us about your loved one...' />


            <Header.Subheader>Upload an Image of your loved one</Header.Subheader>
              <input type="file" class="inputfile" id="embedpollfileinput" />
              <label for="embedpollfileinput" className="ui huge blue floated button">
                <i className="ui upload icon"></i> 
                Upload image
              </label>
                  
            <br></br>
            <br></br>            
            <br></br>

            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default CreatePage;
