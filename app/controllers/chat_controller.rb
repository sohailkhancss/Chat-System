class ChatController < WebsocketRails::BaseController
  def new_message
    send_message :after_send_message, "aaa" #message
  end
end
