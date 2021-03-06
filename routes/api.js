'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    try {
      const input = req.query.input
      const initNum = convertHandler.getNum(req.query.input)
      const initUnit = convertHandler.getUnit(req.query.input)
      const returnNum = convertHandler.convert(initNum, initUnit)
      const returnUnit = convertHandler.getReturnUnit(initUnit)
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      })
    } catch (error) {
      res.json(error)
    }
    console.log(string)
  })

};
