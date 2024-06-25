const express = require('express');
const router = new express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const volunteer = require('../models/volunteer.js');

router.post('/sendEmail', (req, res) => {
    const { email } = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        const htmlContent = fs.readFileSync(path.join(__dirname, 'emailTemplate.html'), 'utf8');

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'CICE Interview Call',
            html: htmlContent
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent" + info.response);
                res.status(201).json({
                    status: 201,
                    info
                })
            }
        })
    } catch (error) {
        res.status(401).json({
            status: 401,
            error
        })
    }
})

router.post('/addvolunteer', async (req, res) => {
    try {
        const { formData } = req.body;
        const email = formData.email;
        const name = formData.name;
        const department = formData.department;

        const newVolunteer = await volunteer.create({
            name,
            email,
            department
        });

        res.status(201).json({
            message: 'Volunteer created successfully',
            volunteer: newVolunteer
        });

    } catch (err) {
        console.error('Error creating volunteer:', err);
        res.status(500).json({
            error: 'Failed to create volunteer'
        });
    }
});


module.exports = router;