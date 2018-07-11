require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");
const jwt = require("jsonwebtoken");