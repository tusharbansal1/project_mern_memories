
exports.ERRORS = {
    BAD_REQUEST: 400,
}
exports.createError = (message, code = 400) => {

    let e = new Error()
    e.message = message
    e.code = code
    return e;
}