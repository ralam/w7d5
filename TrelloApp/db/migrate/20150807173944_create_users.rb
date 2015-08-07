class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token
      t.string :password_digest, null: false
      t.timestamps null: false
    end
    add_index :users, :id
  end
end
