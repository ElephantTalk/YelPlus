# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_26_224705) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name"
    t.string "alias"
    t.string "yelp_id"
    t.string "image_url"
    t.string "url"
    t.string "display_phone"
    t.string "phone"
    t.string "price"
    t.integer "rating"
    t.integer "review_count"
    t.string "address1"
    t.string "address2"
    t.string "address3"
    t.string "city"
    t.string "zip_code"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "owner_id"
    t.string "state"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review_id"
    t.integer "review_rating"
    t.text "review_text"
    t.datetime "review_time_created"
    t.string "review_url"
    t.string "user_id"
    t.string "user_profile_url"
    t.string "user_image_url"
    t.string "user_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_url"
    t.string "image_url"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
