import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';


class Painel extends React.Component {
    render() {
        return (
            <div className="App">
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                        id: 'e59f0e8a-4d19-4852-a6d1-cfdc2a56ef85',
                        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=e59f0e8a-4d19-4852-a6d1-cfdc2a56ef85&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUNFTlRSQUwtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2LyIsImlhdCI6MTY3MTQ3ODk0NSwibmJmIjoxNjcxNDc4OTQ1LCJleHAiOjE2NzE0ODM0NDIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFWUEYvVWN0dER6bVpiZTF0NUxYWk5oRUpSTUlMSncvTGpRTU5uWnlyQThITlhLWmZQSXc4eW1vdFNtVTQ5WXJhIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiVmF6IiwiZ2l2ZW5fbmFtZSI6Ik5hdGFuIiwiaXBhZGRyIjoiMjAwLjEzMS4xNTcuNjAiLCJuYW1lIjoiTmF0YW4gVmF6Iiwib2lkIjoiOWVhY2MxOGQtOGJkOC00ZTU5LThkYjEtY2UyMzA1M2Q0MTE2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNjE5NzU4OTgtMzAyMzYxOTIyNC04OTAxMzc0OTgtMTIyMTIwMSIsInB1aWQiOiIxMDAzMjAwMjQ5RjEzQTBDIiwicmgiOiIwLkFROEFHMWVUZUN4czcweTAybjFMSm1vR0pna0FBQUFBQUFBQXdBQUFBQUFBQUFBUEFBMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJXbTE4ZFJLa2dnN0pZdU5ZakxWejI1aG11Ri1uQkxFYlFGU20xdGZReWxRIiwidGlkIjoiNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2IiwidW5pcXVlX25hbWUiOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1cG4iOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1dGkiOiJTbG5WS3d2RmNFMjNzQ1djSzd6OUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.WUiNinE2v54Z_Uc6tMp14TZEiBRAmGxuMlZGbI-Hz1CJGd1W6MeJ_lQpUTGW3W6HkppeG0X74ZhSKGCELFXOwen-EbM8VCXbH9ywI98Ht6Yq1rrsKT48ZZ1Nc0NNLY41s_SNZn-_rzH3cUZKhjZ1E6MP26pMYwWQ8JS5QOYOhvTfA37vjXkXBTM9nLzOh-6oW6CBwWKUPXLSOBJrc8S2nn_K3QZedZWJBIqO2OULWz5NVKRB7IDVXDOR-vLYvrDrDVExZROtdbCXtppAcMZhSDHw8jUczNK1a6hmqLZOfhIeHWQzNiCh48sX8xUpDX65TsAgpq3ZQLavt4WA5OTZMQ',
                        tokenType: models.TokenType.Aad,
                        settings: {
                            panes: {
                                filters: {
                                    expanded: true,
                                    visible: true
                                }
                            },
                            background: models.BackgroundType.Transparent,
                        }
                    }}

                    eventHandlers={
                        new Map([
                            ['loaded', function () { console.log('Report loaded'); }],
                            ['rendered', function () { console.log('Report rendered'); }],
                            ['error', function (event) { console.log(event.detail); }]
                        ])
                    }

                    cssClassName={"Embed-container full-width flex"}

                    getEmbeddedComponent={(embeddedReport) => {
                        window.report = embeddedReport;
                    }}
                />
            </div>
        );
    }
}

export default Painel;