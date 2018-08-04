#note have to run twice at the end and enter the index again if running python console.
from mpl_toolkits.mplot3d import axes3d
import matplotlib.pyplot as plt
import numpy as np
import math

def repeat():
    option=raw_input( "Do you want to repeat? (y/n)")
    if option=='y':
        return True
    else:
        return False
def pie():
    return 3.14159265358979323846264338327950288419716939937510582097494459230
            
def domain():
    domain1=input("What is the first component of the domain (least)?")
    domain2=input("What is the second component of the domain?")
    domains= (domain1,domain2)
    return domains

def functions(dom1,dom2):
    
    x=[]
    for i in range(dom1,dom2):
        x.insert(i,i**2)
    y=[]
    for i in range(dom1,dom2):
        y.insert(i,i*7-12)
    z=[]
    for i in range(dom1,dom2):
        z.insert(i,i**2)
 
    return x,y,z

def functions2(dom1,dom2):
    
    x=[]
    for i in range(dom1,dom2):
        x.insert(i,i)
    y=[]
    for i in range(dom1,dom2):
        y.insert(i,math.cos(i))
    z=[]
    for i in range(dom1,dom2):
        z.insert(i,3*i-i**3)
 
    return x,y,z
'''def collision(x,y,z,a,b,c,dom1,dom2):
    collision=[]
    x=dom1
    for i in range(dom1,dom2):
        if(x==a):
            collision.append(x,i)
            x=x+1
    return collision '''
        

d1,d2=domain()

fig = plt.figure()

ax = fig.add_subplot(111, projection='3d')

x,y,z=functions(d1,d2)
a,b,c=functions2(d1,d2)

'''col=collision(x,y,z,a,b,c,d1,d2)
print col '''
print x
print a


ax.plot_wireframe(a, b, c)
ax.plot_wireframe(x, y, z)

plt.show() 


        







    