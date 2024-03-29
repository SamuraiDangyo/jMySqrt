/*
jMySqrt, a very simple sqrt function
Copyright (C) 2019 Toni Helminen

jMySqrt is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jMySqrt is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// version 1.2
// Make error smaller and smaller all the time
function jMySqrt(x, rounds = 100) {
  if (x <= 0) return 0;
  if (rounds < 10) rounds = 10;
  
  let guess = x;
  let error = x / 2;

  while (--rounds > 0) {
    let new_guess = guess - error;
    
    if (Math.abs(new_guess * new_guess - x) < 0.001)
      return new_guess;
    
    if (new_guess * new_guess < x) 
      error *= 0.5; 
    else 
      guess = new_guess;
  }
  
  return guess;
}
