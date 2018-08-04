import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

def repeat():
    option=raw_input( "Do you want to repeat? (y/n)")
    if option=='y':
        return True
    else:
        return False

def domain():
    domain1=input("What is the first component of the domain (least)?")
    domain2=input("What is the second component of the domain?")
    domains= (domain1,domain2)
    return domains

def functions1(dom1,dom2):
    dom2=dom2+1
    x=[]
    for i in range(dom1,dom2):
        x.insert(i,i**2)
    y=[]
    for i in range(dom1,dom2):
        y.insert(i,i*7+12)
    z=[]
    for i in range(dom1,dom2):
        z.insert(i,i**2)
 
    return x,y,z

def functions2(dom1,dom2):
    dom2=dom2+1
    x=[]
    for i in range(dom1,dom2):
        x.insert(i,i*4-3)
    y=[]
    for i in range(dom1,dom2):
        y.insert(i,i**2)
    z=[]
    for i in range(dom1,dom2):
        z.insert(i,5*i-6)
 
    return x,y,z

d1,d2=domain()

x=functions1(d1,d2)
a=functions2(d1,d2)


fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.quiver(x,a)
ax.set_xlim([-1, 0.5])
ax.set_ylim([-1, 1.5])
ax.set_zlim([-1, 8])
plt.show()