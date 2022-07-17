module.exports = function dateConverter(jsonData) {
    // console.log(jsonData);
    let date = new Date(jsonData * 1000);
    // console.log(date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    let h = function() { return date.getHours()<10 ? '0'+date.getHours() : date.getHours(); }();
    let m = function() { return date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes(); }();
    // let m = date.getMinutes();
    date = yyyy + '-' + mm + '-' + dd;
    let time = h + ":" + m;
    return { date, time }
}