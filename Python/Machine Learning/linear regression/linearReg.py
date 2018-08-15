import quandl as ql
import matplotlib.pyplot as plt
myData=ql.get("ZILLOW/Z85234_SALES")
x=myData["Value"]
print(x)
plt.plot(myData)
plt.show()