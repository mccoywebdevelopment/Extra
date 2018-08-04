import random

class blackJack(object):
        deck=["2","2","2","2","3","3","3","3","4","4","4","4","5","5","5","5",
                                 "6","6","6","6","7","7","7","7","8","8","8","8","9","9","9","9",
                                 "Jack","Jack","Jack","Jack","Queen","Queen","Queen","Queen",
                                 "King","King","King","King","Ace","Ace","Ace","Ace"]
        left_over_deck=["two","one"]
        hand=[]
        dealer_hand=[]
        x=0
        y=0
        
        def __init__(self,starting_dollars) :
            random.shuffle(self.deck)
        def startHand(self,wager):
            faceDown=self.deck.pop()
            for i in range(4):
                self.dealer_hand.append(self.deck.pop())
            for i in range(5):
                self.hand.append(self.deck.pop())
                       
        def draw(self):
            if len(self.deck)==0:
                random.shuffle(self.left_over_deck)
                self.deck=self.left_over_deck
                card=self.left_over_deck.pop()
            else:
                card=self.deck.pop()
            
            return card
                
        def add_card(self,new_card):
            self.hand.append(new_card)
        def __str__(self):
                print self.hand            
        def __getValue__(self):
            score=0
            ace=0
            for i in range(len(self.hand)):
               if self.hand[i]=="Ace":
                    score=score+11
                    ace=ace+1
               elif self.hand[i]=="Jack" or self.hand[i]=="Queen" or self.hand[i]=="King":
                    score=score+10
               elif self.hand[i]=="2":
                    score=score+2
               elif self.hand[i]=="3":
                    score=score+3
               elif self.hand[i]=="4":
                    score=score+4
               elif self.hand[i]=="5":
                    score=score+5
               elif self.hand[i]=="6":
                    score=score+6
               elif self.hand[i]=="7":
                    score=score+7
               elif self.hand[i]=="8":
                    score=score+8
               elif self.hand[i]=="9":
                    score=score+9
               else: 
                    score=score+10
                    
            while score>21 and ace>0:
                score=score-10
                ace=ace-1
            
            return score
                
                    
                    
            
            

myObject=blackJack(250)


myObject.startHand(30)
print myObject.draw()
print myObject.hand
print(myObject.__getValue__())