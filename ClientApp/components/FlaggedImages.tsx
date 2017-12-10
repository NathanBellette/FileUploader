import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import * as format from 'date-fns/format'

interface AnalysisResult {
    timestamp: Date;
    requestId: string;
    isAdultContent: boolean;
    isRacyContent: boolean;
    imageCaption: string;
    imageFormat: string;
    imageUrl: string;
}

interface FetchDataExampleState {
    results: AnalysisResult[];
    loading: boolean;
}

const tempResults = [
    { 
        timestamp: new Date(2017, 12, 1, 12, 0),
        requestId: 'd1372ec8-dbcb-4cdb-9434-f7d49627f8bc',
        isAdultContent: false,
        isRacyContent: true,
        imageCaption: 'This is an image of a person',
        imageFormat: 'JPEG',
        imageUrl: 'http://path/tp/image'
    },
    { 
        timestamp: new Date(2017, 12, 1, 12, 10),
        requestId: 'e2d4a9ef-0fc5-4bf8-b808-db0c284507ad',
        isAdultContent: true,
        isRacyContent: true,
        imageCaption: 'This is an image of a dog',
        imageFormat: 'PNG',
        imageUrl: 'http://path/tp/image'
    },
    { 
        timestamp: new Date(2017, 12, 1, 12, 15),
        requestId: '115bbf6f-8a50-47ba-9fb1-51f9553e37cb',
        isAdultContent: false,
        isRacyContent: true,
        imageCaption: 'This is an image of a cat',
        imageFormat: 'JPEG',
        imageUrl: 'http://path/tp/image'
    },
    { 
        timestamp: new Date(2017, 12, 1, 12, 23),
        requestId: '4eaa995c-10ab-4e09-a0ea-8471711f744d',
        isAdultContent: true,
        isRacyContent: true,
        imageCaption: 'This is an image of a person',
        imageFormat: 'JPEG',
        imageUrl: 'http://path/tp/image'
    },
    { 
        timestamp: new Date(2017, 12, 1, 12, 21),
        requestId: 'f9b90181-ef99-4c7c-9672-4de57bea8677',
        isAdultContent: false,
        isRacyContent: true,
        imageCaption: 'This is an image of a person',
        imageFormat: 'JPEG',
        imageUrl: 'http://path/tp/image'
    }
];

export class FlaggedImages extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { results: tempResults, loading: false };

        // this.state = { results: [], loading: true };

        // fetch('api/SampleData/WeatherForecasts')
        //     .then(response => response.json() as Promise<WeatherForecast[]>)
        //     .then(data => {
        //         this.setState({ forecasts: data, loading: false });
        //     });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FlaggedImages.renderResultsTable(this.state.results);

        return <div>
            <h1>Flagged Images</h1>
            { contents }
        </div>;
    }

    private static renderGlyphicon = (value: boolean) => {
        const okStyle = {
            color: 'green'
        }

        const removeStyle = {
            color: 'red'
        };

        return value ? <span style={okStyle} className='glyphicon glyphicon-ok' /> : <span style={removeStyle} className='glyphicon glyphicon-remove' />;
    }

    private static renderResultsTable(results: AnalysisResult[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Caption</th>
                    <th>Adult Content</th>
                    <th>Racy Content</th>
                    <th>Image Format</th>
                </tr>
            </thead>
            <tbody>
            {results.map(result =>
                <tr key={ result.requestId }>
                    <td>{ format(result.timestamp, 'YYYY-MM-DD HH:mm') }</td>
                    <td>{ result.imageCaption }</td>
                    <td>{ FlaggedImages.renderGlyphicon(result.isAdultContent) }</td>
                    <td>{ FlaggedImages.renderGlyphicon(result.isRacyContent) }</td>
                    <td>{ result.imageFormat }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

