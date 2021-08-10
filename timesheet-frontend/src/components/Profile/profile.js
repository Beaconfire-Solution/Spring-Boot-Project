import React from 'react';
import {useState, useEffect} from 'react';
import * as ApiService from '../../services/ApiService';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import ProfileCSS from './Profile.module.css';
import Grid from '@material-ui/core/Grid';

function Profile(props) {

    const [name, setName] = useState('Zack Wang');
    const [phone, setPhone] = useState('9173288865');
    const [email, setEmail] = useState('zack@gmail.com');
    const [address, setAddress] = useState('200 Sayre Drive, Princeton, New Jersey 08648');
    const [emcname1, setEmcname1] = useState('Alice Wang');
    const [emcname2, setEmcname2] = useState('John Wang');

    useEffect(() => {
        // Update the document title using the browser API
        ApiService.getProfile()
        .then((response)=>{
            setName(response.data.name);
            //props.getProfileInfo(response.data);
        })
      });

    const handleChange = (event) => {
        setName(event.target.value);
      };


    return(
        <Grid container spacing={2}>
        <Grid container justifyContent="center" spacing={2}>
              
                    <Grid key={1} item>
                                        <div className={ProfileCSS.container}>
                                <form noValidate autoComplete="off">
                                <div className={ProfileCSS.row}>
                                    <h3>
                                        User Info
                                    </h3>
                                    </div>
                                <div className={ProfileCSS.row}>
                                <FormControl variant="outlined">
                                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                                </FormControl>
                                </div>
                                <div className={ProfileCSS.row}>
                                <label for="img">Select image:</label>
                                <input type="file" id="img" name="img" accept="image/*"></input>
                                <input type="submit"></input>
                                </div>
                                
                        </form>
                        </div>
                    </Grid>
                    <Grid key={2} item>
                    <div className={ProfileCSS.container}>
            <form noValidate autoComplete="off">
            <div className={ProfileCSS.row}>
                <h3>
                    Contact
                </h3>
                </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput id="component-outlined" value={phone} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput id="component-outlined" value={email} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={address}
                variant="outlined"
                />
                    </div>
                    <div className={ProfileCSS.row}>
                    <h5>
                            Emergency Contact 1
                        </h5>
                    </div>
                    
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined" disabled>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={emcname1} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined" disabled>
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput id="component-outlined" value={phone} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <h5>
                            Emergency Contact 2
                        </h5>
                        </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined" disabled>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={emcname2} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined" disabled>
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput id="component-outlined" value={phone} onChange={handleChange} label="Name" />
                    </FormControl>
                    </div>
   
            </form>
            </div>
                    </Grid>
                   
                </Grid>
        </Grid>
      
        
    )

}

export default Profile;