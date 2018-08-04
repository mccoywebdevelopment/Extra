#include <iostream>
#include <stdio.h>      /* printf, scanf, puts, NULL */
#include <stdlib.h>     /* srand, rand */
#include <time.h>
/*
The complexity of bubble sort is (O)n^2 in both worst and average cases,
 because the entire array needs to be iterated for every element.
*/
using namespace std;
void binarySort(int arr[],int num);
int swapPlaces(int arr[],int num);
void outPut(int arr[],int num);
void visualEffect(int arr[],int num);
int main()
{
    int iSecret;
    srand (time(NULL));
    iSecret = rand() %100;
    int num;
    int data[10000];
    cin>>num;
    for(int i=0;i<num;++i)
    {
        iSecret = rand() %100;
        data[i]=iSecret;
    }

               //data[num-1] to access the last element
   cout<<"\n";
   visualEffect(data,num);
   binarySort(data,num);
   outPut(data,num);
   cout<<"\n";
   visualEffect(data,num);


}

void binarySort(int arr[],int num)
{
    int smaller,bigger,swapP;
    swapP=swapPlaces(arr,num);
    if(swapP>0)
    {

        binarySort(arr,num);

    }

}

int swapPlaces(int arr[],int num)
{
    int smaller,bigger,temp;
    int swapP=0;
    for(int ix=0;ix<num;++ix)
    {
        smaller=arr[ix];
        bigger=arr[ix+1];
        if(bigger<smaller)
        {
            ++swapP;
            temp=arr[ix];
            arr[ix]=arr[ix+1];
            arr[ix+1]=temp;
        }
    }
    return swapP;

}
void outPut(int arr[],int num){
    for(int x=0;x<num;++x)
    {

        cout<<"\n"<<arr[x];
    }
}
void visualEffect(int arr[],int num)
{

    for(int i=0;i<num;++i)
    {

        for(int x=0;x<arr[i];++x)
        {

            cout<<"*";
        }
        cout<<"\n";
    }
}
