//this will be used to create the if/else statements for the request types
require('dotenv').config();
const Sessions = require('./routes/sessions-model');
let unserializer = require('php-unserialize');
const bcrypt = require('bcryptjs');

try {
  //accessing the session model and and the platform sessions table
  Sessions.findLanceData().then(
    //sessions is the entire platform sessions table(array)
    sessions => {
      console.log(sessions.length);

      //sessions filtering through each row and grabbing/getting each row that has non-zero data field
      //we don't need to unserialize if it doesn't have data
      let array = sessions.filter(row => {
        return row.data.length > 0;
      });

      console.log(array.length);
      //slicing the array to condense the amount of data retrieved/taking a subset of 2 sessions:
      let newArr = array.slice(0, 2);
      // making a new array
      let infoArr = [];
      //looping through the new array
      newArr.forEach((serializedRow, index) => {
        // we created a variable and now we are unserializing the data that we looped through
        const data = unserializer.unserialize(serializedRow.data);

        console.log(serializedRow); //serialized row of data
        console.log(data); //unserialized data
        //Object.keys returning the enumerable keys from the data, looping through each key and pushing this info into the empty infoArr
        Object.keys(data).forEach((keyEle, index) => {
          if (keyEle === 'procedurecommodity') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 1,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'procedurecommoditycat') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 2,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'proceduredest') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 3,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'procedurerequireddocument') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 4,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'procedurerelevantagency') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 5,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'procedureorigin') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 6,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'commoditycountry') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 7,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'commoditymarket'){
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 8,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'commoditycat'){
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 9,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'commodityproduct'){
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 10,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          } else if (keyEle === 'exchangedirection') {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_session_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: 11,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          }
        });
        console.log(infoArr); //Seeing if the array now has access to the key value pairs(data)
      });
    }
  );
} catch ({ message }) {
  console.log(message);
} // if we don't successfully retrieve the data we should see an error message
//to run this script on the command line, type:  node testParser.js

/** 11 if /else statements
 * procedurecommodity
 * procedurecommoditycat
 * proceduredest
 * procedurerequireddocument
 * procedurerelevantagency
 * procedureorigin
 * commoditycountry
 * commoditymarket
 * commoditycat
 * commodityproduct
 * exchangedirection
 *
 */
