class CreateCategoryJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :category_joins do |t|
      t.integer :category_id
      t.integer :business_id
      t.timestamps
    end
  end
end
