### Files
- randledata.csv - Data for sample assignment taken from [Basketball-Reference.com]( https://www.basketball-reference.com/) - Game stats of Julius Randle for 1st 20 games of 2020-21 season
- solutionCode.rb - Sample submission for this assignment<br>


**Task: To sonify data taken from basketball-reference.com by assigning relevant data ranges to different musical functions in Sonic Pi (pitch, duration, volume etc)**

#### Part #1 -
Students will watch this video: [Sonification & The Problem with Making Music from Data](https://www.youtube.com/watch?v=Ocq3NeudsVk)

Discuss points brought up in video
- Choices made when sonifying data are arbitrary. Any value/data point can be assigned to any musical characteristic.
- Data will often need to be manipulated in some way to make the resulting sonification palatable or even audible to the audience.

#### Part #2 -
Show students https://www.basketball-reference.com/

Show example of data set.
Game log for Julius Randle for 2020-21 season - https://www.basketball-reference.com/players/r/randlju01/gamelog/2021

Ask students to make observations about the types of numbers and ranges of numbers they see. (integers vs floats, double digit vs single digit, less than 1)

Have students choose 3 different categories from the data table and choose a musical characteristic this could be used for.

**Things to consider:**<br>
- What functions take what type of numbers/ranges
- Will they need to add/change/manipulate anything about the data to make it work better musically.

**Example** -
- Points per game = MIDI notes (add 24 to each note to make it higher pitched)
- Field Goal Percentage - Rest value (all values between 0 and 1)
- Steals - volume (value at 1 + steals, since some games have zero steals)

#### Part #3 -
Parsing Data in Sonic Pi:

Show students how to access data from website - convert to csv format
Paste data into text file

Import data into Sonic Pi
```ruby
csv = "/Users/admin/Music/Sonic Pi/data test/randle.csv" #file path

require 'csv'
table = CSV.parse(File.read(csv), headers: true)
```

Create arrays for each data category
```ruby
pts = [ ]
fgp = [ ]
stl = [ ]

table.length.times do |i|
  pts.push(table[i]['PTS'].to_i)
  fgp.push(table[i]['FG%'].to_f)
  stl.push(table[i]['STL'].to_i)
end
```
Use data as arguments for different functions and iterate through each value
```ruby
table.length.times do
  play pts.tick + 36, amp: 1 + stl.look
  sleep fgp.look
end
```
#### Part  #4
**In Class Assignment**
- Students should choose a 20 game range from a specific player.
- Choose at least 3 different categories of data.
- Each data category should be stored into an array and used as an argument for a function.
- At least one category should be manipulated to make the data fit in a more musical way.
