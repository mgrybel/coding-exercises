# Write a program that calculates the kinetic energy of a moving object,
# using the formula E = (m * v^2) / 2, where E is the kinetic energy,
# m is the mass of the object and v is the velocity.

# Prompt the user for the mass and velocity of the object
mass = float(input('Enter the mass of the object: '))
velocity = float(input('Enter the velocity of the object: '))

# Calculate the kinetic energy
kinetic_energy = (mass * velocity ** 2) / 2

# Display the result
print('The kinetic energy of the object is:', kinetic_energy)