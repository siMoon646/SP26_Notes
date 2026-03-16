#include <iostream>
#include <string>
#include <vector>
 
using namespace std;

template <typename T>
//uses 'generics' to swap the data at the different addresses
void myswap(T &a, T &b){
    T temp = a;
    a = b;
    b = temp;
}

void printVec(vector<int> vec){
    vector<int>::iterator iter;
    for(iter = vec.begin(); iter != vec.end(); iter++){
        cout << *iter << endl;
    }
}

int main(){
    {
    // int a = 42, b = 10;
    // cout << "value of a: " << a << endl;
    // cout << "value of b: " << b << endl;
    // myswap(a, b);
    // cout << "value of a: " << a << endl;
    // cout << "value of b: " << b << endl;

    // // enhanced for loop using ampersand
    // vector<int> vec;
    // vec.push_back(1);
    // vec.push_back(2);

    // for(int &elt: vec){
    //     elt++;
    // }

    // printVec(vec);
    }

    { // pointers -> important for dynamic memory
        int x = 42;
        cout << "address of x               : " << &x << endl;
        cout << "val of x                   : " << x << endl;

        int* address_of_x = &x; // &x is a pointer to int data, so we can use int* to store this pointer from &x

        cout << "contents of address_of_x   : " << *address_of_x << endl;

        // can update the contents of address_of_x
        *address_of_x =  8;

        cout << "contents of address_of_x   : " << *address_of_x << endl;
    }

    return 1;

}