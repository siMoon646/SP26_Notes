#include <iostream>

using namespace std;



int main(){
    // Dynamic Memory Allocation & pointers
    // every object declared with 'new' is created on the heap
    
    // search the difference between the two below.
    const int* i;
    int* const i;
    const int* const nums;
    
    // Pointer arithmetic: (dynamic memory) -> mostly used for arrays
    //  like moving a pointer over
    // Recall that addresses are not numbers, but you may still add numbers to the address, because there is operator overloading

    int arr[]{10,20,30,40,50};

    int* iptr = arr;

    // iptr points to the first element of tge array, same as arr except it's not const
    // pointer arithmetic allows you to add an integer to a pointer which effectively moves that many e
    
    iptr = iptr + 2; // now iptr points to arr[2]
    // there is no bounds checking, meaning that you could get undefined behavior from pointer arithmetic

    // the condition for stopping the for loop compares two addresses using operator overloading
    for(int* ptr = arr; ptr < arr + size; ptr++){
        cout << *ptr << endl;
    }

    // Dynamic memory: No dynamic memory allocation, memory is not releasead automatically.
    //  lasts the lifetime of the program.
    return 1;
}