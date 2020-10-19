import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { login } from '../../services/user'
import { FormDiv, Buttonn, } from './styled'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

function LoginPage() {
  const classes = useStyles();
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [values, setValues] = React.useState({
        email: "",
        password: '',
        showPassword: false,
      });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter'){
      onClickLogin()

  }}
  const body = {
    email: values.email,
    password: values.password
  }

  const onClickLogin = (event) => {
    event.preventDefault()
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      login(body, history, setIsLoading, setName)
    }
  }

  return (
      <form id={'login_form'}>
      <FormDiv container> 
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
           <Input
               autoFocus
               required
               type={"email"}
               name={"email"}
               required="true"
               requiredError={"Email invalido"}
               value={values.email}
               onChange={handleChange('email')}
               id="input-with-icon-adornment"
               startAdornment={
               <InputAdornment position="start">
                   <AccountCircle />
               </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
               required
               id="standard-adornment-password"
               type={values.showPassword ? 'text' : 'password'}
               value={values.password}
               onChange={handleChange('password')}
               onKeyDown={pressEnter}
               endAdornment={
                   <InputAdornment position="end">
                       <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                       >
                           {values.showPassword ? <Visibility /> : <VisibilityOff />}
                       </IconButton>
                   </InputAdornment>
               }
            />
          </FormControl>
          
               <Buttonn 
                   type={'submit'}
                   onClick={onClickLogin}
                   variant="contained" 
                   color="primary" 
               >
                  {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>entrar</>}
               </Buttonn>
               
      </FormDiv>
      </form>
  );
}

export default LoginPage;
