const nodemailer = require("nodemailer");

const sendEmailController = async (req, res) => {
        const { name, email, message } = req.body;
    
        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL, // Your email
                    pass: process.env.PASSWORD, // Your email app password
                },
            });
    
            const mailOptions = {
                from: email,
                to: process.env.EMAIL, // Your email to receive messages
                subject: `New Contact Form Submission from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };
    
            await transporter.sendMail(mailOptions);
            res.json({ success: true, message: "Email sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Failed to send email" });
        }
    }

module.exports = {sendEmailController}