import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {

        const { dtoken } = req.headers;
        if (!dtoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

        // FIX: req.body is undefined for GET requests
        req.docId = token_decode.id;

        console.log("Header Received:", req.headers);

        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;
