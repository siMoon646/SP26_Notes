#include <iostream>
#include <vector>

using namespace std;

int main(){
    // A vector object of type 'double', on the stack.
    vector<double> v1;
    // empty, the size and capacity are 0
    cout << v1.size() << endl;
    cout << v1.capacity() << endl;
    v1.push_back(3.14);
    // the size and capacity are 1 -> dynamic growth of arrays
    cout << v1.size() << endl;
    cout << v1.capacity() << endl;
    // prints 3.14
    cout << v1[0] << endl;

    //v.at(1) is out of bounds, and will throw an exception
    //v[1] is out of bounds, but will not throw an exception

    // Square brackets will not allow you to assign data to indeces that do are out of bounds.

    // usining initializer list constructor
    vector<double> v2 {1.0, 2.0, 3.0};

    // v2's contents are copied to v1
    v1 = v2;

    // printing an object:
    for(size_t i = 0; i < v1.size(); i++){
        cout << v1[i] << " ";
    }

    cout << "\n split" << endl;

    // range based for loop <-> enhanced for loop
    for (double elt: v1){
        cout << elt << " ";
    }

    cout << "\n split" << endl;

    // using an iterator:

    for(auto it = v.begin(); it != v.end(); ++it){
        // prints the data that the pointer it is pointing to (uses the * (dereferencing) operator).
        cout << *it << " ";
    }

    cout << "\n split" << endl;

    return 0;
}

