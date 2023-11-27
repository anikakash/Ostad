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
