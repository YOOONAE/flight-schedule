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

            return { data, departure, arrival, today };
            // return { data, departure, arrival, today }
            // res.render('flightDetail', { data, departure, arrival, today });
        });


}

module.exports.flightOperatorLoadDB = async function (searchData) {
    const options = {
        method: 'GET',
        // url: 'https://flight-radar1.p.rapidapi.com/flights/search',
        params: { query: searchData, limit: '25' },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };


    // update the below code to be able to receive two parameters; searchData and flightType
    // or create new one for operator only to get logo img
    return filteredData = await axios.request(options)
        .then(function (response) {
            const { results } = response.data;
            console.log(`searchData : ${searchData}`);

            const filters = { type: 'operator' }
            // If one of the values matches "filters", then it returns True and the very element(object) at that moment.
            // It's like OR condition.
            return results.filter(data => {
                for (let key in filters) {
                    if (data[key] === filters[key]) return true;
                }
                return false;
            })

        }).catch(function (error) {
            console.log('*********  Fake Data Loaded *******');
            return fakeDBList.listData.results.filter(data => {
                if (data.type === 'live') return true; //filter.type으로 변경해서 사용..
                return false;
            });
        });
};



module.exports.flightListLoadFromDB = async function (searchData) {
    const options = {
        method: 'GET',
        // url: 'https://flight-radar1.p.rapidapi.com/flights/search',
        params: { query: searchData, limit: '25' },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };


    // update the below code to be able to receive two parameters; searchData and flightType
    // or create new one for operator only to get logo img
    return filteredData = await axios.request(options)
        .then(function (response) {
            const { results } = response.data;
            console.log(`searchData : ${searchData}`);

            const filters = { type: 'live' }
            // If one of the values matches "filters", then it returns True and the very element(object) at that moment.
            // It's like OR condition.
            return results.filter(data => {
                for (let key in filters) {
                    if (data[key] === filters[key]) return true;
                }
                return false;
            })

        }).catch(function (error) {
            console.log('*********  Fake Data and it shows "filtered Data" below *******');
            return fakeDBList.listData.results.filter(data => {
                if (data.type === 'live') return true; //filter.type으로 변경해서 사용..
                return false;
            });
        });
};

module.exports.airlineListLoadFromDB = async function () {
    const axios = require("axios");

    const options = {
        method: 'GET',
        // url: 'https://flight-radar1.p.rapidapi.com/airlines/list',
        headers: {
            'X-RapidAPI-Key': '21f994b7e8msh0ef28431c1cb377p1ff03ejsncae4e65c1ba3',
            'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
        }
    };

    return await axios.request(options).then(function (response) {
        // console.log(response.data);
        console.log('**Real data loaded')
        return response.data

    }).catch(function (error) {
        console.log('**Fake data loaded')
        const data = fakeDBList.airlineList;
        return data;
        // console.error(error);
    });
}