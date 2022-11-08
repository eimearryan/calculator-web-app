/*
Java implentation of a calculator that implements the caluclator features required of Assignment 2
 */
import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        System.out.print("Enter expression to calculate: \n");
        Scanner input = new Scanner(System.in);
        String expression = input.nextLine();
        double answer = evaluate(expression);
        System.out.printf("%,.3f", answer);
    }

    public static double evaluate(final String str) {
        return new Object() {
            int pos = -1, ch;
            void nextChar() {
                if(++pos < str.length()){
                    ch = str.charAt(pos);
                }
                else{
                    ch = -1;
                }
            }

            boolean takeIn(int charToTakeIn) {
                while (ch == ' ') {
                    nextChar();
                }
                if (ch == charToTakeIn) {
                    nextChar();
                    return true;
                }
                return false;
            }

            double parse() {
                nextChar();
                double x = parseExpression();
                if (pos < str.length()){
                    throw new RuntimeException("Unexpected: " + (char)ch);
                }
                return x;
            }
            double parseExpression() {
                double x = parseTerm();
                for (;;) {
                    if (takeIn('+')){
                        x += parseTerm(); // addition
                    }
                    else if (takeIn('-')) {
                        x -= parseTerm(); // subtraction
                    }
                    else return x;
                }
            }

            double parseTerm() {
                double x = parseFactor();
                for (;;) {
                    // multiplication
                    if (takeIn('*')){
                        x *= parseFactor();
                    }

                    // division
                    else if (takeIn('/')){
                        x /= parseFactor();
                    }

                    else return x;
                }
            }

            double parseFactor() {
                // unary plus
                if (takeIn('+')){
                    return parseFactor();
                }

                // unary minus
                if (takeIn('-')){
                    return -parseFactor();
                }

                double x;
                int startPos = this.pos;

                // brackets
                if (takeIn('(')) {
                    x = parseExpression();
                    takeIn(')');
                }

                // numbers
                else if ((ch >= '0' && ch <= '9') || ch == '.') {
                    while ((ch >= '0' && ch <= '9') || ch == '.'){
                        nextChar();
                    }
                    x = Double.parseDouble(str.substring(startPos, this.pos));
                }

                // functions
                else if (ch >= 'a' && ch <= 'z') {
                    while (ch >= 'a' && ch <= 'z') {
                        nextChar();
                    }
                    String func = str.substring(startPos, this.pos);
                    x = parseFactor();

                    if (func.equals("log")) {
                        x = Math.log(x);
                    }
                    else if (func.equals("exp")){
                        x = Math.exp(x);
                    }
                }
                else {
                    throw new RuntimeException("Unexpected: " + (char)ch);
                }

                // exponents
                if (takeIn('^')) {
                    x = Math.pow(x, parseFactor());
                }
                return x;
            }
        }.parse();
    }
}