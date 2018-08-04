Main:
 gosub InitializeRobot
end  

InitializeRobot:
 rX=400
 rY=300
 rD=360

 rLocate rX, rY, rD
 rInvisible red,yellow 
 gosub MouseInput
end
MouseInput:
 while TRUE
  ReadMouse xM,xY,Button
  if Button<>0
   print  xM;xY;Button
   gosub nav
   delay 500
  endif
 wend
end
//Origin= x=400,y=300
nav:
 
  delay 1000
  rHeading 90
  delay 1000
  rHeading 360
  gosub MouseInput
  
end



