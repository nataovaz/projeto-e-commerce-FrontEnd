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
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2LyIsImlhdCI6MTY3MTQwMTQzMiwibmJmIjoxNjcxNDAxNDMyLCJleHAiOjE2NzE0MDYxMjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWUloWENWbVd1ZFJnYTQ0VEcrOU1Oa2VGTW8wSjNCM1cyWjhWVE9Rc2t6V003WCsyTVdSeW1NUzlOTlI1M2JENXQwY0NBQT09IiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImRldmljZWlkIjoiZWEyODcxZDMtODFhYi00MGM3LWE2NDctN2Q0ZGI0YTAxYTMyIiwiZmFtaWx5X25hbWUiOiJWYXoiLCJnaXZlbl9uYW1lIjoiTmF0YW4iLCJpcGFkZHIiOiIxOTEuNS44NS4xMTgiLCJuYW1lIjoiTmF0YW4gVmF6Iiwib2lkIjoiOWVhY2MxOGQtOGJkOC00ZTU5LThkYjEtY2UyMzA1M2Q0MTE2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNjE5NzU4OTgtMzAyMzYxOTIyNC04OTAxMzc0OTgtMTIyMTIwMSIsInB1aWQiOiIxMDAzMjAwMjQ5RjEzQTBDIiwicmgiOiIwLkFROEFHMWVUZUN4czcweTAybjFMSm1vR0pna0FBQUFBQUFBQXdBQUFBQUFBQUFBUEFBMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJXbTE4ZFJLa2dnN0pZdU5ZakxWejI1aG11Ri1uQkxFYlFGU20xdGZReWxRIiwidGlkIjoiNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2IiwidW5pcXVlX25hbWUiOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1cG4iOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1dGkiOiJvNG4tZnJJWVowZVFCSWdxZ3ZVMkFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.aiGiQYdrZOcxPBHpG360m2vYKj2M7PZ9LQsqRdi0dH60VifYEl8dS6Z2ghMWU7t4QoAyd52s70XF9ZpTh-SWTo16uy9maDY1RYuq8wB7gle90_QZ9VICR1TRspQRjIRxphKvKUuhMzg2UnGmFeX9FxdHfW0QJ6uTCnyMuSQLMzMPUo25IMAHweFZ9lsfqzD0jfrJR-dZTI0DpKMH5PMrqziamVnH3ebdUH6GMbzuqy8yZTtkrijIhd9RL_vBbVXIloCz94ZGH1sz2462aQijJNkN6OPGeSCsKwRDp4KrEw36gi2u_dy8U99W9yjTQwa6hPjXrkO9vWOfFKELZlwpKg',
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