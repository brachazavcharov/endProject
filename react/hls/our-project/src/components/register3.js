import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Divider, Label } from 'semantic-ui-react'
const Register3 = () => {
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h1'>נשלח אליך קוד סודי במייל על מנת לאשר את פרטיך </Header>
            <Button
                content='שלח פעם נוספת'
                primary
            />
                <Button
            content='אישור'
            primary
        />
        </Grid.Column>
    
    </Grid>);
}
export default Register3;
