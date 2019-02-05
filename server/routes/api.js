const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');

var db;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect('mongodb://admin:password1@ds119445.mlab.com:19445/swendelonixregia', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('swendelonixregia');

});



//NORMAL USER STUFF
//Login for Normal Staff Users
router.get('/authstaffuser/:username/:password', (req, res2) => {
    var username = req.params.username;
    var password = req.params.password;
    db.collection('staff_user').findOne({ "username": username }, { password: 1, _id: 0 }, function (err, result) {
        if (result == null) res2.send([{ "auth": "false1" }]);
        else {
            bcrypt.compare(password, result.password, function (err, res) {
                if (res) {
                    res2.send([{ "auth": true, "role": result.role }]);
                } else {
                    res2.send([{ "auth": false }]);
                }
            });
        }
    });
});

//Register for Normal Staff Users
router.get('/regstaffuser/:staffAccountNumber/:username/:password/:role', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('staff_user').save({ "staffAccountNumber": req.params.staffAccountNumber, "username": req.params.username, "password": hash, "role": req.params.role }, (err, result) => {
        });
    });
});


//DOCTOR STUFF

//Register for Doctors
router.get('/regdoctor/:doctorId/:doctorPassword/:role', (req, res) => {
    bcrypt.hash(req.params.doctorPassword, BCRYPT_SALT_ROUNDS, function (err, hash) {
        db.collection('doctorusers').save({ "doctorId": req.params.doctorId, "doctorPassword": hash, "role": req.params.role }, (err, result) => {
        });
    });
});


//Login for Doctors
router.get('/authdoctor/:doctorId/:doctorPassword', (req, res2) => {
    var doctorId = req.params.doctorId;
    var doctorPassword = req.params.doctorPassword;
    db.collection('doctorusers').findOne({ "doctorId": doctorId }, { doctorPassword: 1, _id: 0 }, function (err, result) {
        if (result == null) res2.send([{ "auth": false }]);
        else {
            bcrypt.compare(doctorPassword, result.doctorPassword, function (err, res) {
                if (res) {
                    res2.send([{ "auth": true, "role": result.role }]);
                } else {
                    res2.send([{ "auth": false }]);
                }
            });
        }
    });
});


//GET (retrieve) all Staff Accounts
router.get('/staffAccounts', function (req, res) {
    db.collection('staff_user').find().toArray((err, results) => { res.send(results) });
});

//POST consultation
router.post('/createConsultation/:item', (req, res) => {
    db.collection('consultations').insertOne( {"item":item} , (err, result) => {
    });
});

//POST staff record
router.post('/createStaffRecord/:staffId/:firstName/:lastName/:staffUsername/:mobileNumber/:homeNumber/:streetAddress/:blockNumber/:unitNumber/:postalCode/:country/:duty', (req, res) => {
    db.collection('staff_record').insertOne( req.body , (err, result) => {
    });
});

//GET (retrieve) all Staff Records
router.get('/staffRecords', function (req, res) {
    db.collection('staff_record').find().toArray((err, results) => { res.send(results) });
});




// GET "search function"
router.get('/staffRecords/:staffId', function (req, res) {
    var staffId = req.params.staffId;
    db.collection('staff_record').find({ "staffId": staffId }).toArray(
        (err, results) => { res.send(results) });
});

//UPDATE ZZZ
router.route('/replyConsultation/:_id/:reply/:status').put(function (req, res) {
    db.collection('consultations').updateOne
    ({ "_id": ObjectId(req.params._id) }, { $set: {reply:req.params.reply, status:req.params.status} });
});

//Filter Resolved
router.get('/resolved', function (req, res) {
    db.collection('consultations').find({ "status": "resolved" }).toArray(
        (err, results) => { res.send(results) });
});

//Filter Unresolved
router.get('/unresolved', function (req, res) {
    db.collection('consultations').find({ "status": "unresolved" }).toArray(
        (err, results) => { res.send(results) });
});

module.exports = router;

