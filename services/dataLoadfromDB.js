const axios = require('axios');
const fakeDBList = require('../controllers/fakeDB/fakeDbList');
const dateConverter = require('../utils/dateConverter');


module.exports.detailFlightLoadFromDB = async function (fltApiId) {
    const options = {
        method: 'GET',
        // url: 'https://flight-radar1.p.rapidapi.com/flights/detail',
        // url: '/flightList.json', 
        params: { flight: fltApiId }, //get id from API in search screen, and search the detailed info of this id.
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };
    return await axios.request(options)
        .then(function (response) {
            const { data } = response
            //time, aircraft, airline, airport, 
            console.log('Real data loaded for detailed/selected flight');

            const departure = dateConverter(data.time.scheduled.departure);
            const arrival = dateConverter(data.time.scheduled.arrival);
            const today = dateConverter(new Date() / 1000);
            // console.log(departure);
            // console.log(arrival);
            // console.log(today);

            return { data, departure, arrival, today }
            // res.render('flightDetail', { data, departure, arrival, today });  
            // res.send('flight detail page works!');

        })
        .catch(function (error) {

            console.log('3. ** FakeDB loaded for detailed flight')
            const data = fakeDBList.detailData

            const departure = dateConverter(data.time.scheduled.departure);
            const arrival = dateConverter(data.time.scheduled.arrival);
            const today = dateConverter(new Date() / 1000);
            // console.log(departure);
            // console.log(arrival);
            // console.log(today);

            return { data, departure, arrival, today};
            // return { data, departure, arrival, today }
            // res.render('flightDetail', { data, departure, arrival, today });
        });


}

