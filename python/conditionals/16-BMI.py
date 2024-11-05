# Write a program that asks for a person's height and weight and calculates their BMI 
# (body mass index), displaying the corresponding category (underweight, normal weight,
# overweight, obese, severely obese).

# Prompt the user to enter their height and weight
height = float(input("Enter your height in meters: "))
weight = float(input("Enter your weight in kilograms: "))

# Calculate the BMI using the formula BMI = weight / (height^2)
bmi = weight / (height ** 2)

# Determine the corresponding BMI category
if bmi < 18.5:
  category = "Underweight"
elif bmi < 25:
  category = "Normal weight"
elif bmi < 30:
  category = "Overweight"
elif bmi < 35:
  category = "Obese"
else:
  category = "Severely obese"

# Display the BMI and category
print("Your BMI is:", bmi)
print("Category:", category)