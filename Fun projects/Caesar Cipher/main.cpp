#include <iostream>
char* userInput();
char* encripted(char alphabet[],int shift,int num,char *cString);
int Count(char alphabet[],char letter,int num);
using namespace std;


int main()
{
    char alphabet[27] = {'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'};


    char letter,key;
    int countL,countK,shift;
    int num=27;
    char *cString;
    char *start=cString;

    cout<<"Enter the line of text you want to encrypt."<<endl;
    cString=userInput();


    while(*cString!='\0')
    {
        cout<<*cString<<endl;
        cString++;
    }
    cString=start;



    cout<<"The next step is to give the computer two letters."<<endl;
    cout<<"First, give a letter of the original text."<<endl;
    cin>>letter;

    cout<<"Now, give the computer a letter you want to replace it with."<<endl;
    cin>>key;

    //cout<<"key"<<key<<endl;
    countL=Count(alphabet,letter,num);
    countK=Count(alphabet,key,num);
    shift=countK-countL;
    if(shift<0)
    {
        shift=shift+26;
    }
    //cout<<"shift"<<shift;
    char* message;
    start=message;
    message=encripted(alphabet,shift,num,cString);
    //encripted(alphabet,shift,num,cString);
    cout<<endl;
    while(*message!='\0')
    {
        cout<<*message;
        message++;

    }
    message=start;







}

char* encripted(char alphabet[],int shift,int num,char *cString)
{
    char *message=new char[81];
    char *start=message;

    char letter1;
    int counter;
    while(*cString!='\0')
    {
        letter1=*cString;
        counter=Count(alphabet,letter1,num);
        if(counter<0)
        {
            counter=counter+26;
        }
        *message=alphabet[counter+shift-1];


        ++message;++cString;

    }
    *message='\0';
    message=start;
    return message;

}
/*char shifter(char alphabet,int num,char startLetter)
{
    f
*/
int Count(char alphabet[],char letter,int num)
{
    int counter=0;
    for(int x=0;x<num;++x)
    {
        if(letter==alphabet[x])
        {
            return counter+1;
        }
        counter=counter+1;
    }
}
char* userInput()
{
    char c;
    char *input = new char[81];
    c=cin.get();
    char *start=input;
    while(c!='\n')
    {
            *input=c;
            input++;
            c=cin.get();
    }
    *input='\0';
    input=start;

    return input;
}

