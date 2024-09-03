import numpy as np


def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
        # loop 1 time for win/loop 1000 times for losing
        for _ in range(weight):
            container_list.append(name)
    return container_list


weights = {
        'winning': 1,
        'losing': 1000
    }

weighted_lottery(weights)

other_weights = {
        'winning': 1,
        'break_even': 2,
        'losing': 3
    }

weighted_lottery(other_weights)


import numpy as np

def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
        for _ in range(weight):
            container_list.append(name)

    return np.random.choice(container_list)

#  weights = {
#      'winning': 1,
#      'losing': 1000
#  }
#
#  print(weighted_lottery(weights))

# other_weights = {
#     'green': 1,
#     'yellow': 2,
#     'red': 3
# }

print(weighted_lottery(other_weights))