require("minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")
require_relative("../card_game.rb")



class CardGameTest < MiniTest::Test

  def setup
    @card1 = Card.new("hearts", 5)
    @card2 = Card.new("clubs", 7)
    @card3 = Card.new("spades", 1)
  end

  def test_check_for_ace_when_ace()
    assert_equal(true, CardGame.check_for_ace(@card3))
  end

  def test_check_for_ace_when_not_ace()
    assert_equal(false, CardGame.check_for_ace(@card1))
  end

  def test_highest_card()
    assert_equal(7, CardGame.highest_card(@card1, @card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 12", CardGame.cards_total([@card1, @card2]))
  end

end
