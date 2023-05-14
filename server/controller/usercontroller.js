const usermodel = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const postmodel = require('../model/Post');
const supmodel = require('../model/Sup');
const medmodel = require('../model/Med');
exports.fetchUser = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const user = await usermodel.findById(_id);
        const JWT_SECRET = 'sharmitha';
        const token = jwt.sign({ id: _id }, JWT_SECRET);
        res.status(200).json([
            {
                token: token,
                id: user._id,
                username: user.username
            }
        ]);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
exports.createUser = async (req, res) => {
    let { username, email, password, confirmpassword } = req.body
    if (!username || !password || !confirmpassword || !email) {
        return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    if (password !== confirmpassword)
        return res.status(400).json({ msg: "Passwords doesn't match." });

    console.log("Error")
    if (password.length < 6)
        return res.status(400).json({ msg: "The password needs to be atleast 6 characters long." });
    const existingUser = await usermodel.findOne({ username: username });
    if (existingUser)
        return res.status(400).json({ msg: "An account with this username already exists." });
    const salt = await bcrypt.genSalt();
    const user = req.body;
    let hashpassword = req.body.password;
    hashpassword = await bcrypt.hash(hashpassword, salt);
    req.body.password = hashpassword;
    const newUser = new usermodel(user);
    console.log(newUser)
    try {
        await newUser.save()
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        const user = await usermodel.findById(newUser._id);
        const JWT_SECRET = 'sharmitha';
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET);
        res.status(201).json([
            {
                token: token,
                id: user._id,
                username: user.username,
                password: user.password,
                email: user.email
            },
        ]);
    } catch (error) {
        res.status(409).json({ message: error });
    }

}
exports.Login = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !password || !email)
            return res.status(400).json({ msg: "Not all fields have been entered." });
        const user = await usermodel.findOne({ username: username });
        const userr = await usermodel.findOne({ email: email });
        if (!user && !userr)
            return res.status(400).json({ msg: "Account not registered" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ msg: "Invalid credentials." });
        else {
            res.json({
                id: user._id,
                username: user.username,
                message: "login successfully"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error });
    }
}
exports.postMedicine = async (req, res) => {
    const lastProduct = await postmodel.findOne().sort({ sno: -1 }).exec();
    let newSno = 1;
    if (lastProduct) {
        newSno = lastProduct.sno + 1;
    }
    const postmedicine = new postmodel({
        supplier_name: req.body.supplier_name,
        shopname: req.body.shopname,
        email: req.body.email,
        contact: req.body.contact,
        drugname: req.body.drugname,
        quantity: req.body.quantity,
        order_date: req.body.order_date,
        status: req.body.status,
        sno: newSno
    })
    console.log("first")
    await postmedicine.save()
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
    res.json("successfully registered")
}
exports.postSup = async (req, res) => {
    const lastProduct = await supmodel.findOne().sort({ sno: -1 }).exec();
    let newSno = 1;
    if (lastProduct) {
        newSno = lastProduct.sno + 1;
    }
    const postsup = new supmodel({
        supplier_name: req.body.supplier_name,

        email: req.body.email,
        contact: req.body.contact,
        location: req.body.location,
        sno: newSno
    })
    await postsup.save()
    res.json("successfully registered")
}
exports.display = async (req, res) => {
    const data = await postmodel.find()
    res.json(data)
}
exports.disp = async (req, res) => {
    const dat = await supmodel.find()
    res.json(dat)
}
exports.postMed = async (req, res) => {
    const lastProduct = await medmodel.findOne().sort({ sno: -1 }).exec();
    let newSno = 1;
    if (lastProduct) {
        newSno = lastProduct.sno + 1;
    }
    const postmed = new medmodel({
        medicine_name: req.body.medicine_name,
        quantity: req.body.quantity,
        expiry_date: req.body.expiry_date,
        sno: newSno
    })
    await postmed.save()
    res.json("successfully registered")
}
exports.displayy = async (req, res) => {
    const data = await medmodel.find()
    res.json(data)
}
exports.deleteUser = async (req, res) => {
    try {
        const deleteduser = await postmodel.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.updateUser = async (req, res) => {
    try {
        const updateduser = await postmodel.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.allPostMed = async (req, res) => {
    const lastProduct = await medmodel.find().exec()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
exports.updateStatus = async (req, res) => {
    console.log("hgkj")
    try {
        const updateduser = await postmodel.updateOne({ _id: req.params.id }, { $set: { status: "Accepted" } });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.updateExpiry = async (req, res) => {
    console.log("hgkj")
    try {
        const updateduser = await medmodel.updateOne({ _id: req.params.id }, { $set: { status: "Expired" } });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
