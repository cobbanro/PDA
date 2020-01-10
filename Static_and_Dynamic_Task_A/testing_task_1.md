### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  def checkforAce(card) # needs to have underscores after every word and no capitals
    if card.value = 1 # '==' should be used (instead of '=') with conditionals
      return true
    else      # else is not necessary here
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def and a ',' between arguments
  if card1.value > card2.value
    return card # card does not exist, it should be card1
  else
    return card2
  end
end
end # one to many ends + improper indentation

def self.cards_total(cards) # self is not required
  total
  for card in cards
    total += card.value # option has not been assigned a value
    return "You have a total of" + total # there should be a space after the last character of the string and total should have a method converting to a string if it was a number, which it isn't
  end
end # bad indentation and a missing end - connecting to the class
```
