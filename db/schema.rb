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

ActiveRecord::Schema.define(version: 20171205221527) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "hospital_surgeons", force: :cascade do |t|
    t.integer  "surgeon_id"
    t.integer  "hospital_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["hospital_id"], name: "index_hospital_surgeons_on_hospital_id", using: :btree
    t.index ["surgeon_id"], name: "index_hospital_surgeons_on_surgeon_id", using: :btree
  end

  create_table "hospitals", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string   "name"
    t.date     "date_of_birth"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "photos", force: :cascade do |t|
    t.text     "data"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "image_extension"
  end

  create_table "postcards", force: :cascade do |t|
    t.integer  "photo_id"
    t.text     "message"
    t.text     "to_address"
    t.text     "from_address"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "font"
    t.string   "font_size"
    t.string   "alignment"
    t.index ["photo_id"], name: "index_postcards_on_photo_id", using: :btree
  end

  create_table "surgeons", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "surgeries", force: :cascade do |t|
    t.integer  "surgery_type_id"
    t.date     "performed_on"
    t.integer  "hospital_surgeon_id"
    t.integer  "patient_id"
    t.date     "rehab_date_of_admission"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["hospital_surgeon_id"], name: "index_surgeries_on_hospital_surgeon_id", using: :btree
    t.index ["patient_id"], name: "index_surgeries_on_patient_id", using: :btree
    t.index ["surgery_type_id"], name: "index_surgeries_on_surgery_type_id", using: :btree
  end

  create_table "surgery_types", force: :cascade do |t|
    t.string   "surgery_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "facebook_user_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "password_digest"
    t.uuid     "revocable_session_token"
    t.integer  "credits",                 default: 0
  end

  add_foreign_key "hospital_surgeons", "hospitals"
  add_foreign_key "hospital_surgeons", "surgeons"
  add_foreign_key "surgeries", "hospital_surgeons"
  add_foreign_key "surgeries", "patients"
  add_foreign_key "surgeries", "surgery_types"
end
