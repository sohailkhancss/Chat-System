class CreateChatRooms < ActiveRecord::Migration
  def change
    create_table :chat_rooms do |t|
      t.integer :owner

      t.timestamps
    end
  end
end
