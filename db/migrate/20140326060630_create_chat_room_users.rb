class CreateChatRoomUsers < ActiveRecord::Migration
  def change
    create_table :chat_room_users do |t|
      t.integer :chat_room_id
      t.integer :user_id

      t.timestamps
    end
  end
end
