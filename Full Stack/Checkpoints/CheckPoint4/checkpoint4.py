from decimal import Decimal
import math


# EXERCISE 1: Create a list, tuple, float, integer, decimal, and dictionary.

var_list = ["Madrid", "Valencia", "Barcelona", "Bilbao"]

var_tuple = ("Lucia", "Marta", "Andrea")

var_float = 26.04

var_int = 18

var_decimal = Decimal(18.96)

var_dict = {
    "win": 1,
    "break_even": 2,
    "lose":3
}

# Print out the variables
print("List:", var_list)
print("Tuple:", var_tuple)
print("Float:", var_float)
print("Integer:", var_int)
print("Decimal:", var_decimal)
print("Dictionary:", var_dict)

# EXERCISE 2: Round your float up.

print(math.ceil(var_float))         



# EXERCISE 3: Get the square root of your float.

# import math
print(math.sqrt(var_float))          



# EXERCISE 4: Select the first element from your dictionary.



# todo
dict_elements = var_dict.items()
print(list(dict_elements)[0])      

# primer valor
print(var_dict["win"])              

# primera clave
dict_keys = var_dict.keys()
print(list(dict_keys)[0])           



# EXERCISE 5: Select the second element from your tuple.



print(var_tuple[1])                 



# EXERCISE 6: Add an element to the end of your list.



var_list.append("Mallorca")
print(var_list)              



# EXERCISE 7: Replace the first element in your list.

var_list[0] = "Malaga"
print(var_list)              



# EXERCISE 8: Sort your list alphabetically.

var_list.sort()
print(var_list)              



# EXERCISE 9: Use reassignment to add an element to your tuple.


var_tuple += ("Maya",)
print(var_tuple)             