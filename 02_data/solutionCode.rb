csv = "/Users/admin/Music/Sonic Pi/data test/randledata.csv"

require 'csv'
table = CSV.parse(File.read(csv), headers: true)

pts = [] #points per game
fgp = [] # field goal percentage
stl = [] # steals per game

# put data from each category into array
# all data is parsed as string, so use to_i or to_f to convert to numeric values
table.length.times do |i|
  pts.push(table[i]['PTS'].to_i)
  fgp.push(table[i]['FG%'].to_f)
  stl.push(table[i]['STL'].to_i)
end

#iterate through each value
table.length.times do
  play pts.tick + 36, amp: 1 + stl.look
  sleep fgp.look
end
