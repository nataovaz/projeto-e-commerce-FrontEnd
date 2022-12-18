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
                        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2LyIsImlhdCI6MTY3MTM5NTMxOSwibmJmIjoxNjcxMzk1MzE5LCJleHAiOjE2NzEzOTk1MjUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFYNERjdzU0RDltSGloT3YyTUJ1ckJidGdUb0FFUHFuQnh4aWpKYXFSU3B1OXQrOGdUOTFKSzNXby9BL2lQWG96IiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImRldmljZWlkIjoiZWEyODcxZDMtODFhYi00MGM3LWE2NDctN2Q0ZGI0YTAxYTMyIiwiZmFtaWx5X25hbWUiOiJWYXoiLCJnaXZlbl9uYW1lIjoiTmF0YW4iLCJpcGFkZHIiOiIxOTEuNS44NS4xMTgiLCJuYW1lIjoiTmF0YW4gVmF6Iiwib2lkIjoiOWVhY2MxOGQtOGJkOC00ZTU5LThkYjEtY2UyMzA1M2Q0MTE2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTExNjE5NzU4OTgtMzAyMzYxOTIyNC04OTAxMzc0OTgtMTIyMTIwMSIsInB1aWQiOiIxMDAzMjAwMjQ5RjEzQTBDIiwicmgiOiIwLkFROEFHMWVUZUN4czcweTAybjFMSm1vR0pna0FBQUFBQUFBQXdBQUFBQUFBQUFBUEFBMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJXbTE4ZFJLa2dnN0pZdU5ZakxWejI1aG11Ri1uQkxFYlFGU20xdGZReWxRIiwidGlkIjoiNzg5MzU3MWItNmMyYy00Y2VmLWI0ZGEtN2Q0YjI2NmEwNjI2IiwidW5pcXVlX25hbWUiOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1cG4iOiJOYXRhbi5WYXpAdmFsZS5jb20iLCJ1dGkiOiJFNmUxaUJ0YWdrcWt3V2p1R0w3RUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.JhtSrtLEHnkea2_qJ0mTlRiZ_jsE621mtchrwOAx5yZsAeAdK78uVk72N_g5VoPWqiX5vaLF5SVi51OziMb1QozQVKVzu_4BkKBOApgnPB4R0U2H2nfSQBzf4b7eqpIeI2zIC9Djp-ur24r9Ro6yI5eOwGYizFsu_y7xeXByqNco_Yxz7clcZdJhtWc8zQz6Jv9n4mSc4OKMs3Mgj3xL7GUqt252M0QJm0hBU1IOhKvgktJ4W2c8JlgGHVDt81MJnb0I6osHVpxMHZ1sg1tpcY25gne1mrIWmiSpyMpOblprausU49s54pfC8cYn2YKUAtwHKrUXCpEh5YLuHSldVA',
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