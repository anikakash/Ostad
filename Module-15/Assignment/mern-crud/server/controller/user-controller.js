import User from '../schema/use-schema.js'

export const addUser = async(request, response) =>{
    const user = request.body;
    // console.log(user);
    const lastUser = await User.find({}).limit(1).sort({id:-1});
    const newUser = await User({...user, id:lastUser[0]?.id+1 || 1});

    try{
      await newUser.save();
        response.status(201).json(newUser);
    }catch (e){
        response.status(409).json({message: `${e.message} failed`});
    }
}

export const getUsers = async (req, res) =>{
    try{
       const users = await User.find({});
       res.status(200).json(users);
    }catch (e){
        res.status(400).json({message : error.message});
    }
}

export const getUser = async (req, res) =>{
    let id = req.params.id;
    try{
        const user = await User.find({id: req.params.id});
        res.status(200).json(user[0]);
    }catch (e){
        res.status(400).json({message : e.message});
    }
}

export const editUser = async (req, res) =>{
    let user = req.body;
    const editUser = new User(user);
    try{
        await User.updateOne({id: req.params.id}, editUser);
        res.status(201).json(editUser);
    }catch (e){
        console.log("Error while updating user info ", e);
        res.status(409).json({message: e.message});
    }
}

export const deleteUserInfo = async (req, res) =>{
    try{
        await User.deleteOne({id: req.params.id});
        res.status(201).json({message: "User deleted successfully"});
    }catch (e){
        console.log("Error While deleting users ", e);
        res.status(409).json({message: e.message});
    }
}