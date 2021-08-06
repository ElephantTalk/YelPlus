# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!({ first_name: "Demo", last_name: "User", email: "test01@gmail.com", password: "password" })

business1 = Business.create!({
  name: "Mcdonalds",
  owner_id: demo.id,
  website: "https://www.mcdonalds.com",
  address1: "160 Broadway",
  city: "New York",
  state: "NY",
  zipcode: "10038",
  latitude: 40.7094,
  longitude: -74.0100,
  phone: "(212) 388-0088",
})
