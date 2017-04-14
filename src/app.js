'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('335266548:AAFcg4PH3jKJDoIFuegVItaGtD85hjUR4ng')

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
    new TextCommand('/lanchonetes', 'lanchonetes'), new LanchonetesController()
  )
