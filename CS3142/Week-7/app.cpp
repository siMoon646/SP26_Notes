#include <iostream>

using namespace std;

void swap(int* p1, int* p2){
    int temp = p1;
    *p1 = *p2;
    *p2 = temp;
    
}

int main(){
    int i = 10;
    int* iptr = &i;

    cout << i << " is stored at location: " << iptr << " which holds the same data asL " << &i << endl;
    // how does const interact with pointer variables?
    // trick for reading variables: read them from the inside out
    const int* ciptr = &i;
    cout << ciptr << endl;

    int* const ciptr2 = &i;
    *ciptr2 = 20;
    cout << *ciptr2 << endl;
    return 1;
}