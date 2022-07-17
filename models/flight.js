const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flight: String,
    time: {
        scheduled: {
            departure: Number,
            arrival: Number
        }
    },
    identification: {
        id: String,
        number: {
            default: String
        }
    },
    aircraft: {
        model: {
            code: String,
            text: String
        },
    }
});

// fake DB에서 불러온 데이터를 여기 db 모델 이용해서 저장하고, 이걸 오더에다가 커넥트 시켜보기
// 잘 작동되면 show page(list) 에서 ...선택해서 오더랑 연결할 방안 생각해보기

// const Flight = mongoose.model('Flight', flightSchema);
const Flight = mongoose.model('Flight', flightSchema);


module.exports = Flight;
