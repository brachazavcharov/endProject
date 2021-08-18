import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Divider, Label } from 'semantic-ui-react'

const Register2 = () => {
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            {/* <Header as='h2' color='teal' textAlign='center'>
        </Header> */}
            <Header as='h1'>על מנת לתת לך מענה,עליך למלא את הפרטים המדויקים</Header>
            <Form>
                <Icon className="food"></Icon>
                <Form.Field>
                    <input type='text' placeholder='גובה' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס גובה
                  </Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='number' placeholder='משקל' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס משקל
                    </Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='number' placeholder='גיל' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס גיל
                    </Label>
                </Form.Field>
                <Divider />
                <Header as='h4' color='teal' textAlign='right'>:מין</Header>
                <Form.Group widths='equal'>
                    <Form.Field control='select'>
                        <option value='male'>זכר</option>
                        <option value='female'>נקבה</option>
                    </Form.Field>
                </Form.Group>
                <Divider />
                <Header as='h4' color='teal' textAlign='right'>:היקפים</Header>
                <Form.Field>
                    <input type='number' placeholder='חזה' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס מספר
                    </Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='number' placeholder='אגן' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס מספר
                    </Label>
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='number' placeholder='מותן' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס מספר
                    </Label>
                </Form.Field>
                <Divider />
                <Button icon labelPosition='right'>
                    הבא
                <Icon name='right arrow' />
                </Button>
            </Form>
        </Grid.Column>
    </Grid>);
}
export default Register2;