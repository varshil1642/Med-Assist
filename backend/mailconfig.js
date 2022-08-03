const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator')

var otp = otpGenerator.generate(6, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
exports.transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'teammedassistant@gmail.com',
        pass:"Medassist161024"
    }
});
exports.mailOptions ={
    from:'teammedassistant@gmail.com',
    to:'',
    subject:'User Verification',
    html:'<p>Here is your verification code to register in Med Assist: </p><b>'+otp+'</b>'
}


