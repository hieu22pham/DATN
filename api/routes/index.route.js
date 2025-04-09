const ModelListRoute = require("./ModelList.route")
const GARoute = require("./GA.route")
const TrainingRoute = require('./Training.route')

module.exports = (app) => {
    app.use('', ModelListRoute)
    app.use('', GARoute)
    app.use('', TrainingRoute)
}