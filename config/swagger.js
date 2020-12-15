'use strict'

module.exports = {
    definition: {
        openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
        info: {
            title: 'Hello World',
            version: '1.0.0', // Version (required)
            termsOfService: "http://swagger.io/terms/",
            contact: {
                email: "swagger@swagger.com"
            },
            license: {
                name: "Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        basePath: '/',
        schemes: [
            "https",
            "http"
        ],
    },
    // Path to the API docs
    apis: ['./swagger/**/*.js']

  }
