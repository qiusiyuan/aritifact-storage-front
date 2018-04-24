import React, { Component } from 'react';
import {Image, Button} from 'react-bootstrap'
import axios from 'axios';
const FileDownload = require('react-file-download');
var path = require('path');
var filePic = require('../pic/file.jpg');
var folderPic = require('../pic/folder.jpeg');

class FileRow extends Component{
  constructor(){
    super();
    this.state = {
     
    };
    this.downloadFile = this.downloadFile.bind(this);
  }
  downloadFile(filePath){
    axios.get('http://9.30.97.77:10010/v1/download', 
    {headers: {"fullPath": filePath}})
    .then((response) => {
      if (response.data instanceof Object){
        console.log(JSON.stringify(response.data));
        response.data = JSON.stringify(response.data);
      }
      FileDownload(response.data, this.props.fileMeta.fileName);
    });
  }
  render(){
    let that = this;
    const fileMeta = this.props.fileMeta
    var newPath = path.join(this.props.currentDir, this.props.fileMeta.fileName);
    var scpToOptions = {fromPath: newPath}
    return(
      <tr key={this.props.ikey} height='50px'>      
        {fileMeta.isDirectory ?  
          <td name='filename' width='30px'> 
            <Button onClick={() => this.props.fetchFileList(newPath)}>
              <Image src={folderPic} height='40' width='40' alt='folder'/> {this.props.fileMeta.fileName} 
            </Button>
          </td> :
          <td name='filename' width='100px'> 
            <Image src={filePic} height='40' width='40' alt='file'/> {this.props.fileMeta.fileName}
          </td>}
        <td name='size' width='60px'> {fileMeta.size}</td>
        <td name='buttonscp' width='20px'>
            {fileMeta.fileName!=='..'&&<Button bsSize="large"  bsStyle="info" onClick={() => this.props.openScpToModal(scpToOptions)}> SCP </Button>}
        </td>
        <td name='buttondownload' width='20px'>
            {fileMeta.fileName!=='..'&& <Button bsSize="large" bsStyle="info" onClick={() => that.downloadFile(newPath)} disabled={fileMeta.isDirectory}> Download </Button>}
        </td>
      </tr>
    );
  }
}

export default FileRow;