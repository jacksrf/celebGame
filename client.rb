require 'HTTParty'

puts "Welcome, Give me an IP address!"
address = gets.chomp

response = HTTParty.get(address)
puts response

$count = 0

while ($count < 1)
  puts "What is your guess?"
  answer = gets.chomp
  response = HTTParty.get(address + "/" + answer)
  if response['correct']
    puts response['correct']
    exit
  elsif response['incorrect']
    puts response['incorrect']
  end
end
