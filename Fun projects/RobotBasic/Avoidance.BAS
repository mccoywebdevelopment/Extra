main:
 call start()
end
//======================================================================
sub start()
 rX=400;rY=300;rD=360
 
 call initialRobot(rX,rY,rD)
 call nav(rX,rY,rD)
return
//======================================================================
sub nav(rX,rY,rD)
 num=0
 while (num<3)
  call Rect()
  num=num+1
 wend
 
 while TRUE
 
  call Rect()
  
  rInvisible green,blue,red
  while !(rDFeel() & 4)
   rForward 1
  wend
  while (rDFeel() & 4)
   rTurn 90
  wend
 wend
//======================================================================
sub MouseInput(&xM,&yM,&Button)
 while TRUE
  ReadMouse xM,yM,Button
  if Button<>0
   delay 500
  endif
 wend
return
//======================================================================
sub Rect()
 button=0

 while (button==0)
 readMouse xM,yM,button
 if button<>0
  Rectx=xM
  Recty=yM
  Rectangle Rectx+20,Recty+20,Rectx-20,Recty-20
  delay 500
 endif
 wend
                                                                                     
return
//======================================================================
sub initialRobot(&rX,&rY,&rD)
 rLocate rX,rY,rD
 rSpeed 10
return
 

