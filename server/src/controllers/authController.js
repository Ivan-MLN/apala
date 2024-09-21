const express = require("express");
const authSchema = require("../schemas/authSchema");
const userModel = require("../models/useerModel");
const { ZodError } = require("zod");

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const registerUser = async(req, res) => {
    try {
        const body = authSchema.parse(req.body);
        const data = await userModel.findOne({ name: body.name, id: body.id });
        if(data) return res.send("userlu dah ada kocak");

        const nuser = {
            name: body.name,
            id: body.id,
            phone: body.phone
        }

        const ndata = new userModel(nuser);
        await ndata.save();

        res.send(200);
    } catch(err) {
        if(err instanceof ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: err.errors
            })
        } else res.status(500).send("aplah:v");
        
    }
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const loginUser = async(req, res) => {
    try {
        const body = authSchema.parse(req.body);
        const data = await userModel.findOne({ name: body.name, id: body.id });
        if(!data) return res.send("Daftar dlu lu kocak");

        return res.status(200).json(data);
        
    } catch(err) {
        if(err instanceof ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: err.errors
            })
        } else res.status(500).send("aplah:v");
    }
}

module.exports = {
    loginUser,
    registerUser
}