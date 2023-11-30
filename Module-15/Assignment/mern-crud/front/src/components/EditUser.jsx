import {FormControl, FormGroup, InputLabel, Typography, styled, Input, Button} from "@mui/material";
import {useState, useEffect} from "react";
import {editUser, getuser} from "../service/api";
import {useNavigate, useParams} from "react-router-dom";


const StyledFormGroup  = styled(FormGroup)({
    display: "flex",
    width: "50%",
    margin: "5% auto 0 auto",
    fontSize: "20px"
});

const  StyledFormControl = styled(FormControl)({
    marginTop: "20px"
})

const  StyledFormControlButton = styled(FormControl)({
    marginTop: "20px",
    marginBottom: "10px"
})
const EditUser = () => {

    let [objData, setObj] = useState({fName: "", lName:"", gender:"", dOB:"", nationality: "", address:"", email:"",phone:""});


    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);
    const loadUserDetails =  async () =>{
       try{
           const response = await getuser(id);
           console.log(`data come from backedn `, response);
           setObj(response.data);
       }catch (e){
           console.log("Erro loading user detailes ", e);
       }
    }


    const onValueChange = (property, value) =>{
        setObj(preObj =>({
            ...preObj,
            [property] : value
        }))
    }
    const editStudentDetailes = async () =>{
        // Call api to inset data
        await editUser(objData, id); // addUser is a async function
        alert("Student Info Edit successfully")
        navigate("/");
    }

    return (
        <div>
            <StyledFormGroup >
                <Typography variant="h3">Edit Students</Typography>
                <StyledFormControl>
                    <InputLabel>First Name</InputLabel>
                    <Input onChange={(e) => {onValueChange("fName",e.target.value)}} value={objData.fName ||""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input onChange={(e) => {onValueChange("lName",e.target.value)}} value={objData.lName || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Gender</InputLabel>
                    <Input onChange={(e) => {onValueChange("gender",e.target.value)}} value={objData.gender || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Date Of Birth</InputLabel>
                    <Input onChange={(e) => {onValueChange("dOB",e.target.value)}} value={objData.dOB || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Nationality</InputLabel>
                    <Input onChange={(e) => {onValueChange("nationality",e.target.value)}} value={objData.nationality || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e) => {onValueChange("address",e.target.value)}} value={objData.address || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => {onValueChange("email",e.target.value)}} value={objData.email || ""}/>
                </StyledFormControl>

                <StyledFormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => {onValueChange("phone",e.target.value)}} value={objData.phone || ""}/>
                </StyledFormControl>

                <StyledFormControlButton>
                    <Button variant="contained" onClick={()=>editStudentDetailes()}>Edit Student</Button>
                </StyledFormControlButton>
            </StyledFormGroup >
        </div>
    );
};

export default EditUser;