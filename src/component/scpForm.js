import {FormControl,FormGroup,InputGroup} from 'react-bootstrap';
import React, { Component } from 'react';

class ScpForm extends Component{
  render(){
    return(
      <FormGroup>
      <InputGroup>
        <FormControl
          type="text"
          value={this.props.scpUserValue}
          placeholder="root"
          onChange={this.props.changeScpUser}
          
        /> 
        <InputGroup.Addon>:</InputGroup.Addon>
        <FormControl
          type="text"
          value={this.props.scpPasswordValue}
          placeholder="password"
          onChange={this.props.changeScpPassword}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl
          type="text"
          value={this.props.scpIpValue}
          placeholder="clusterIp"
          onChange={this.props.changeScpIp}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Addon>Path</InputGroup.Addon>
        <FormControl
          type="text"
          value={this.props.remotePath}
          placeholder="/remote/path"
          onChange={this.props.changeRemotePath}
        />
      </InputGroup>
    </FormGroup>
    );
  }
}
export default ScpForm;