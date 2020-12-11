'use strict'
const Kue = use('Kue')
const Job = use('App/Jobs/NewRegistrationMail')
class UserController {
  async store ({ request, response }) {
    const {username, email} = request.only(['email', 'username'])
    try {
      Kue.dispatch(Job.key, {username, email}, {attempts: 3})
      return response.status(200).send({message: 'Email enviado!'})
    } catch (error) {
      return response.status(400).send({message: error.message});
    }
  }
}

module.exports = UserController
