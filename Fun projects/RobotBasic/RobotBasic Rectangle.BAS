



while TRUE
 readMouse xM,yM,button
 if button<>0
  //print xM;yM;button
  Rectx=xM
  Recty=yM
   
  Rectangle Rectx+20,Recty+20,Rectx-20,Recty-20
  
  delay 20
 endif
wend                                                                                     
Rectangle 300,200,300,200,BLACK



