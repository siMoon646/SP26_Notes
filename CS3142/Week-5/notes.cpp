// defining a scope (this applies to the whole .cpp file):
using namespace std;

// defining a generic type for the whole class, this means that any reference to 'T' is a generic.
template <class T>
// generic methods go down here.

// all the prototypes from the header.h file now "exist" in this file.
// '#include' is a preprocessor, it perfroms a text subsitution where all the text in the header.h file replaces this line.
#include "header.h";