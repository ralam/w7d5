class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :user_id
      t.timestamps null: false
    end

    add_index :boards, :user_id
  end
end
