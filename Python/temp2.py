Python 2.7.13 (v2.7.13:a06454b1afa1, Dec 17 2016, 20:42:59) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 
from mpl_toolkits.mplot3d import axes3d
import matplotlib.pyplot as plt
import numpy as np


def graph(x,y,z):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    
    
    
    ax.plot_wireframe(x, y, z)
    
    plt.show()

'''def equation():
    while repeat(): '''
        
    
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

def functions(dom1,dom2):
    dom2=dom2+11
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
        

d1,d2=domain()
x,y,z=functions(d1,d2)
#print x,y,z
graph(x,y,z)

n=input("")
