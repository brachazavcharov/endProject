import React, { useRef, useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment, Divider, Label } from 'semantic-ui-react'

const Register1 = () => {
    let firstNameInput = useRef(null);
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [firstName, setFirstName] = useState(true);
    let lastNameInput = useRef(null);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [lastName, setLastName] = useState(true);
    let phoneInput = useRef(null);
    const [phoneValid, setPhoneValid] = useState(true);
    const [phone, setPhone] = useState(true);
    let mailInput = useRef(null);
    const [mailValid, setMailValid] = useState(true);
    const [mail, setMail] = useState(true);
    let passwordInput = useRef(null);
    const [passwordValid, setPasswordValid] = useState(true);
    const [password, setPassword] = useState("");
    useEffect(() => {
        lastName.length < 2 ? setLastNameValid(false) : setLastNameValid(true);
        firstName.length < 2 ? setFirstNameValid(false) : setFirstNameValid(true);
        phone.length < 9 || phone.length > 9 ? setPhoneValid(false) : setPhoneValid(true);
        password.length < 2 ? setPasswordValid(false) : setPasswordValid(true);
        firstName.length < 2 ? setFirstNameValid(false) : setFirstNameValid(true);
    }, [firstName, firstNameValid, lastName, lastNameValid,phone,phoneValid])
    const submit = () => {
        if (firstNameValid && lastNameValid && phoneValid && mailValid && passwordValid) {

        }
    }
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Header as='h1'>ברוך בואך לאתרינו</Header>
            <Header as='h1'>:לצורך זיהוי אנא הכנס את פרטייך</Header>
            <Message visible>שדות המסומנים ב-* הינם שדות חובה.</Message>
            <Form onSubmit={submit} >
                <Icon className="food"></Icon>
                <Form.Field>
                    <input ref={firstNameInput} onChange={() => {
                        let x = firstNameInput.current.value;
                        setFirstName(x);
                    }}
                        type='text' placeholder='שם פרטי' />
                    {
                        !firstNameValid ?
                            <Label basic color='red' pointing>
                                בבקשה הכנס שם פרטי תקין
                            </Label>
                            :
                            null
                    }
                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='text' placeholder='שם משפחה' ref={lastNameInput} onChange={() => {
                        let x = lastNameInput.current.value;
                        setLastName(x);
                    }} />
                    {
                        !lastNameValid ? <Label basic color='red' pointing>
                            בבקשה הכנס שם משפחה תקין
                </Label> : null}

                </Form.Field>
                <Divider />
                <Form.Field>
                    <input type='text' placeholder='מספר פלאפון' ref={phoneInput}
                        onChange={() => {
                            let x = phoneInput.current.value;
                            setPhone(x);
                        }} />
                    {
                        !phoneValid ? <Label basic color='red' pointing>
                            בבקשה הכנס מספר פלאפון
                    </Label>
                            : null}
                </Form.Field>
                <Divider />
                <Form.Field inline>
                    <input type='text' placeholder='דוא"ל' />
                    <Label basic color='red' pointing='left'>
                        !  המייל הזה קיים כבר
                   </Label>
                </Form.Field>
                <Divider />
                <Form.Field inline>
                    <Label basic color='red' pointing='right'>
                        סיסמא חייבת להכיל 6 תווים לפחות
                    </Label>
                    <input type='password' placeholder='Password' />
                </Form.Field>
                <Header as='h4' color='teal' textAlign='right'>:כתובת</Header>
                <Form.Field>
                    <input type='text' placeholder='עיר' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס עיר
                    </Label>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='רחוב' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס רחוב
                </Label>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='מספר רחוב' />
                    <Label basic color='red' pointing>
                        בבקשה הכנס מספר רחוב
                </Label>
                </Form.Field>
                <Button icon labelPosition='right' disabled>
                    הבא
                <Icon name='right arrow' />
                </Button>
            </Form>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid >);
}
export default Register1;




