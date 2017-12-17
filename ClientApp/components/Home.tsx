import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import * as Dropzone from 'react-dropzone/dist/index';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {

    constructor() {
        super();
        this.state = {
            files: []
        };
    }

    onDrop = files => {
        this.setState({
            files
        }); 
        console.log(files);
    }

    render() {

        const styles = {
            width: '200px',
            height: '200px',
            borderWidth: '2px',
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: '5px',
            padding: '10px'
        };

        return (
            <div>
                <h1>Upload Images</h1>
                 <Dropzone onDrop={this.onDrop} style={styles}>
                    Click or select files to upload.
                 </Dropzone>
            </div>
        );
    }
}