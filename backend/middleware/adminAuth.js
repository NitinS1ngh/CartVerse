import jwt from 'jsonwebtoken';

const adminAuth = async (req,res,next) => {
    try {
        
        const {token}  = req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }

        if (token === "guest") {
            if (req.originalUrl === "/api/order/list") {
                return next();
            } else {
                return res.json({success:false,message:"Guest Access: Read Only"})
            }
        }

        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        next()

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default adminAuth;