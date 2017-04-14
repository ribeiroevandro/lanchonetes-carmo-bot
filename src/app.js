'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const dotenv = require('dotenv').config({ path: '../.env' })
const chatbot = new Telegram.Telegram(process.env.TELEGRAM_TOKEN)

class StartController extends TelegramBaseController {
  start(scope) {
    let user = scope.message.from._firstName
    let msg = `Olá, ${user} bem vindo ao Lanchonetes de Carmo/RJ`

    scope.sendMessage(msg)
  }

  get routes() {
    return {
      'startHandler': 'start'
    }
  }
}

class LanchonetesController extends TelegramBaseController {
  LanchonetesAction(scope) {
    let msg = `Lachonete Paulão (22) 2537-2654\nFuncionamento de Terça a Domingo das 18hs às 01hs`

    scope.sendMessage(msg)
  }

  get routes() {
    return {
      'lanchonetes': 'LanchonetesAction'
    }
  }
}

chatbot.router
  .when(
    new TextCommand('/start', 'startHandler'), new StartController()
  )
  .when(
    new TextCommand('/lanchonetes', 'lanchonetes'), new LanchonetesController()
  )
