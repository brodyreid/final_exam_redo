# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"

Bid.delete_all
Auction.delete_all
User.delete_all

super_user = User.create(
    name: "Jon Snow",
    email: "js@winterfell.gov",
    password: PASSWORD
)

10.times do
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        password: PASSWORD
    )
end

users = User.all

10.times do
    created_at = Faker::Date.backward(days: 30)
    a = Auction.create(
        title: Faker::Appliance.equipment,
        description: Faker::Quote.famous_last_words,
        end_date: Faker::Date.forward(days: 60),
        reserve_price: Faker::Number.within(range: 10..1000),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if a.valid?
        a.bids = rand(1..5).times.map do
            Bid.new(
                amount: Faker::Number.between(from: a.reserve_price, to: 300),
                user: users.sample    
            )
        end
    end
end



puts "generated #{Auction.count} auction items, #{Bid.count} bids, and #{User.count} users"