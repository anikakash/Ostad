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
