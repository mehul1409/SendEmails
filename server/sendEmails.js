const volunteer = require('./models/volunteer.js');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

async function sendEmails() {

    try {
        const volunteers = await volunteer.find();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });

        const htmlContent = fs.readFileSync(path.join(__dirname, 'emailTemplate.html'), 'utf8');

        for (let volunteerdata of volunteers) {

            let modifyhtmlContent = htmlContent.replace('{{name}}', volunteerdata.name)
                .replace('{{department}}', volunteerdata.department)

            const mailOptions = {
                from: process.env.EMAIL,
                to: volunteerdata.email,
                subject: `CICE ${volunteerdata.department} VOLUNTEER INTERVIEW INVITATION`,
                html: modifyhtmlContent
            }

            await transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent to " + info.envelope.to);
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendEmails;

