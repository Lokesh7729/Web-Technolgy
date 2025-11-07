#include <iostream>
#include <string>
using namespace std;
int main()
{
    string name = "Hello";
    string rev;

    for (int i = name.size()-1; i >=0; i--)
    {
        rev = rev + name[i];
    }
    cout << "reverse string : " << rev;
}