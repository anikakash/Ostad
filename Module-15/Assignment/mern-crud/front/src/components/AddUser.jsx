import {FormControl, FormGroup, InputLabel, Typography, styled, Input, Button} from "@mui/material";
import {useState} from "react";
import {addUser} from "../service/api";
import {useNavigate} from "react-router-dom";


const StyledFormGroup  = styled(FormGroup)({
    display: "flex",
    width: "50%",
    margin: "5% auto 0 auto"
});

const  StyledFormControl = styled(FormControl)({
    marginTop: "20px"
})

const  StyledFormControlButton = styled(FormControl)({
    marginTop: "20px",
    marginBottom: "10px"
})
const AddUser = () => {

    let [objData, setObj] = useState({fName: "Anik", lName:"Akash", gender:"Male", dOB:"1 Jan", nationality: "bd", address:"dhaka", email:"anik@gmail.com",phone:"12345"});
    const onValueChange = (property, value) =>{
        setObj(preObj =>({
            ...preObj,
            [property] : value
        }))
    }

    const navigate = useNavigate();
    const addStudentDetailes = async () =>{
        // Call api to inset data
      await  addUser(objData); // addUser is a async function
        alert("Studnet add successfully")
        navigate("/");
    }

    return (
        <div>
            <StyledFormGroup >
                <Typography variant="h3">Add Students</Typography>
                <StyledFormControl>
                    <InputLabel>First Name</InputLabel>
                    <Input onChange={(e) => {onValueChange("fName",e.target.value)}} value={objData.fName}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input onChange={(e) => {onValueChange("lName",e.target.value)}} value={objData.lName}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Gender</InputLabel>
                    <Input onChange={(e) => {onValueChange("gender",e.target.value)}} value={objData.gender}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Date Of Birth</InputLabel>
                    <Input onChange={(e) => {onValueChange("dOB",e.target.value)}} value={objData.dOB}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Nationality</InputLabel>
                    <Input onChange={(e) => {onValueChange("nationality",e.target.value)}} value={objData.nationality}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e) => {onValueChange("address",e.target.value)}} value={objData.address}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => {onValueChange("email",e.target.value)}} value={objData.email}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => {onValueChange("phone",e.target.value)}} value={objData.phone}/>
                </StyledFormControl>

                <StyledFormControlButton>
                    <Button variant="contained" onClick={()=>addStudentDetailes()}>Submit</Button>
                </StyledFormControlButton>
            </StyledFormGroup >
        </div>
    );
};

export default AddUser;