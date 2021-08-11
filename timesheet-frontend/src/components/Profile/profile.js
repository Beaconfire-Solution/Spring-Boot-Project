import React from 'react';
import {useState, useEffect} from 'react';
import * as ApiService from '../../services/ApiService';
import { TextField, Button, InputLabel, OutlinedInput, FormControl} from '@material-ui/core';
import ProfileCSS from './Profile.module.css';
import Grid from '@material-ui/core/Grid';
import { RowingRounded } from '@material-ui/icons';

function Profile(props) {

    const [contact, setContact] = useState({
        phone: '9173288865',
        email: 'zack111@gmail.com',
        address: '200 Sayre Drive, Princeton, New Jersey 08648',
    })

    const [name, setName] = useState('Zack');

    const [emc, setEmc] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        ApiService.getProfile()
        .then((response)=>{
            setContact(response.data.contact);
            setName(response.data.name);
            setEmc(response.data.emergencyContacts);
        
        })
      }, []);

    const handleChange = (prop) => (event) => {
        setContact({ ...contact, [prop]: event.target.value});
      };

    function testChange(){
        ApiService.postProfile(contact);
    }


    return(
        <Grid container spacing={2}>
                    <div className={ProfileCSS.container}>
                        <form noValidate autoComplete="off">
                                <div className={ProfileCSS.row}>
                                    <h3>
                                        User Info
                                    </h3>
                                    </div>
                                <hr></hr>
                                <div className={ProfileCSS.row}>
                                <FormControl variant="outlined" disabled>
                                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                                <OutlinedInput id="component-outlined" value={name}  label="Name" />
                                </FormControl>
                                </div>
                                <div className={ProfileCSS.row}>
                                <label for="img">Select image:</label>
                                <input type="file" id="img" name="img" accept="image/*"></input>
                                <input type="submit"></input>
                                </div>
                            
            <div className={ProfileCSS.row}>
                <h3>
                    Contact
                </h3>
                </div>
                <hr></hr>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                    <OutlinedInput id="component-outlined" value={contact.phone} onChange={handleChange('phone')} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput id="component-outlined" value={contact.email} onChange={handleChange('email')} label="Name" />
                    </FormControl>
                    </div>
                    <div className={ProfileCSS.row}>
                    <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={contact.address}
                onChange={handleChange('address')}
                variant="outlined"
                />
                    </div>
                    <div className={ProfileCSS.row}>
                    <Button variant="contained" color="primary" onClick={testChange} >
                    Save
                    </Button>
                    </div>
                    {emc.map((row, index) => (
                        <>
                        <div className={ProfileCSS.row}>
                        <h5>
                                Emergency Contact {index + 1}
                            </h5>
                        </div>
                        <hr></hr>
                        <div className={ProfileCSS.row}>
                        <FormControl variant="outlined" disabled>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput id="component-outlined" value={row.firstName + " " + row.lastName} label="Name" />
                        </FormControl>
                        </div>
                        <div className={ProfileCSS.row}>
                        <FormControl variant="outlined" disabled>
                        <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                        <OutlinedInput id="component-outlined" value={row.phone} label="Name" />
                        </FormControl>
                        </div>
                        </>

                    ))}
                   
   
            </form>
            </div>
                   
        </Grid>
      
        
    )

}

export default Profile;