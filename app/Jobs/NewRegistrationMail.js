'use strict'
const Mail = use('Mail')
class NewRegistrationMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewRegistrationMail-job'
  }

  async handle ({username, email}) {
    console.log(`Job: ${NewRegistrationMail.key}`);
    await Mail.send('emails.welcome', {username, email}, (message) => {
      message
        .to(email)
        .from('Stylesheets <fernando.stylesheets.com.br>')
        .subject('Testando o envio de emails')
    })
  }
}

module.exports = NewRegistrationMail

