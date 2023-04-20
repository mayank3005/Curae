const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctorModel = require("../models/doctorModel");
const appointmentModel = require('../models/appointmentModel');
const moment = require('moment');

//register callback
const registerController = async (req, res) => {
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email });
        if (exisitingUser) {
            return res
                .status(200)
                .send({ message: "User Already Exist", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Register Controller ${error.message}`,
        });
    }
};

// login callback
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(200)
                .send({ message: "user not found", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: "Invlid EMail or Password", success: false });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
};

const authController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.body.userId });
        user.password = undefined;
        if (!user) {
            return res.status(200).send({
                message: "user not found",
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "auth error",
            success: false,
            error,
        });
    }
};

// Appply Doctor CTRL
const applyDoctorController = async (req, res) => {
    try {
        const newDoctor = await doctorModel({ ...req.body, status: "pending" });
        await newDoctor.save();
        const adminUser = await userModel.findOne({ isAdmin: true });
        const notification = adminUser.notification;
        notification.unshift({
            type: "apply-doctor-request",
            message: `${newDoctor.firstName} ${newDoctor.lastName} Has Applied For A Doctor Account`,
            data: {
                doctorId: newDoctor._id,
                name: newDoctor.firstName + " " + newDoctor.lastName,
                onClickPath: "/admin/doctors",
            },
        });
        await userModel.findByIdAndUpdate(adminUser._id, { notification });
        res.status(201).send({
            success: true,
            message: "Doctor Account Applied Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error WHile Applying For Doctotr",
        });
    }
};

//notification ctrl
const getAllNotificationController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const seennotification = user.seennotification;
        const notification = user.notification;
        seennotification.push(...notification);
        user.notification = [];
        user.seennotification = seennotification;
        const updatedUser = await user.save();
        res.status(200).send({
            success: true,
            message: "all notification marked as read",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in notification",
            success: false,
            error,
        });
    }
};

const deleteAllNotificationController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        user.notification = [];
        user.seennotification = [];
        const updateUser = await user.save();
        updateUser.password = undefined;
        res.status(200).send({
            success: true,
            message: 'Notifications deleted successfully',
            data: updateUser
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: 'unable to delete all notifications',
            err
        })
    }
}

//GET ALL DOC
const getAllDocotrsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({ status: "approved" });
        res.status(200).send({
            success: true,
            message: "Docots Lists Fetched Successfully",
            data: doctors,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Errro WHile Fetching DOcotr",
        });
    }
};

//BOOK APPOINTMENT
const bookAppointmentController = async (req, res) => {
    try {
        console.log(req.body.date);
        console.log(req.body.time);
        // req.body.date = moment(req.body.date, "DD-MM-YYYY");
        // req.body.time = moment(req.body.time, "HH:mm");
        req.body.status = "pending";
        const newAppointment = new appointmentModel(req.body);
        await newAppointment.save();
        const user = await userModel.findOne({ _id: req.body.doctorInfo.userId });
        user.notification.unshift({
            type: "New-appointment-request",
            message: `A New Appointment Request from ${req.body.userInfo.name}`,
            onCLickPath: "/user/appointments",
        });
        await user.save();
        res.status(200).send({
            success: true,
            message: "Appointment Book succesfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While Booking Appointment",
        });
    }
};

// booking bookingAvailabilityController
const bookingAvailabilityController = async (req, res) => {
    try {
        // const date = req.body.data;
        // const time = req.body.time;
        const date = moment(req.body.date, "DD-MM-YYYY");
        const time = moment(req.body.time, "HH:mm");
        const doctorId = req.body.doctorId;
        console.log(date); console.log(time);
        const oneHourBefore = moment(time, "HH:mm").subtract(1, "hour").format('HH:mm');
        const oneHourAfter = moment(time, "HH:mm").add(1, "hour").format('HH:mm');

        const doc1 = req.body.doctor.timings[0];
        const doc2 = req.body.doctor.timings[1];

        console.log('doc1 ' + doc1);
        console.log('doc2 ' + doc2);
        console.log('time ' + moment(time).format("HH:mm"));
        console.log('oneHourAfter ' + oneHourAfter);

        if (moment(time).format("HH:mm") > doc2 || moment(time).format("HH:mm") < doc1) {
            return res.status(200).send({
                message: "Appointments not available at this time",
                success: true,
                isAvailable: false
            });
        }

        const appointments = await appointmentModel.find({
            doctorId,
            date: moment(date).format('DD-MM-YYYY'),
            $or: [
                {
                    time: {
                        $gte: oneHourBefore,
                        $lte: moment(time).format("HH:mm"),
                    },
                },
                {
                    time: {
                        $gte: moment(time).format("HH:mm"),
                        $lte: oneHourAfter,
                    },
                },
            ],
        });

        console.log(appointments);

        // appointments.forEach((app) => {
        //     console.log(app.time + ' ' + oneHourBefore + ' ' + time);
        // })

        if (appointments.length > 0) {
            return res.status(200).send({
                message: "Appointments not available at this time",
                success: true,
                isAvailable: false
            });
        } else {
            return res.status(200).send({
                success: true,
                message: "Appointments available",
                isAvailable: true
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error In Booking",
        });
    }
};


const userAppointmentsController = async (req, res) => {
    // try {
    //     const appointments = await appointmentModel.find({
    //         userId: req.body.userId,
    //     });
    //     res.status(200).send({
    //         success: true,
    //         message: "Users Appointments Fetch SUccessfully",
    //         data: appointments,
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         error,
    //         message: "Error In User Appointments",
    //     });
    // }
};


module.exports = {
    loginController,
    registerController,
    authController,
    applyDoctorController,
    getAllNotificationController,
    deleteAllNotificationController,
    getAllDocotrsController,
    bookAppointmentController,
    bookingAvailabilityController,
    userAppointmentsController
};