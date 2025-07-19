# Write an algorithm that solves the Tower of Hanoi

def tower_of_hanoi(n, source, destination, auxiliary):
  if n > 0:
    # Move n - 1 diskis from source to auxiliary rod
    tower_of_hanoi(n - 1, source, auxiliary, destination)
    # Move the nth disk from source to destination rod
    print(f"Move disk {n} from {source} to {destination}")
    # Move the n - 1 disks from auxiliary to destination rod
    tower_of_hanoi(n - 1, auxiliary, destination, source)

# Test the tower_of_hanoi function
n = 3 # The number of disks
source = "A" # The source rod
destination = "C" # The destination rod
auxiliary = "B" # The auxiliary rod

print(f"Solving the Tower of Hanoi with {n} disks:")
tower_of_hanoi(n, source, destination, auxiliary)