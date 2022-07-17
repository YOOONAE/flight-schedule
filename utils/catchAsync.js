module.exports = function catchAsync(fn) {
    //In order to use ".catch", fn() must be async function since async function has Promise in itself.
    //Also, fn(arg1,arg2,arg3) : These arguments will not be defined until you wrap it by higher function; function(req,res,next) which is the basic Express handler with parameters provided by Express.
    return function (req, res, next) {
        fn(req, res, next).catch(e => {
            console.log('This error went through "catchAsync" custom error hanlder by Yun to catch async errors');
            next(e);
        })
    }
}