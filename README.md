# calculator-web-app

## Group 6 CSU33012 Assignment 2

### How to run the app
  - enter the following commands to run the app:
  ####
  % git clone https://github.com/eimearryan/calculator-web-app.git
  ####
  % cd Calculator
  ####
  % docker build -t calc-web-app .
  ####
  % docker run -p 4000:80 calc-web-app
  ####
  
The app should be available at http://localhost:4000/

### How to use the app
The calculator can: 
  - handle both integers and floating point numbers
  - perform addition, subtraction, multiplication, division, power (^), 
    natural log, and exp functions.
  - results are given to 3 decimal places.  

Expressions should be inputted in the following way:
  - power expressions should be input with brackets 
    e.g. 2^n should be input as 2^(n)

  - exp functions should be input as e(n)
    e.g e^4 should ne input as e(4)
    
