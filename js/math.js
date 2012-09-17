/** @author William J.D. **/

/*
HTML5 base code
Copyright (C) 2012 William James Dyce

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


var sign = function(x)
{
  return (x>0) ? 1 : ((x<0) ? -1 : 0);
}

function rand_between(x, y)
{
  return Math.random()*(Math.abs(x-y)) + Math.min(x,y);
}

function rand_amongst(array)
{
  return array[Math.round(Math.random()*(array.length-1))];
}

function rand_sign()
{
  return (Math.random() < 0.5) ? -1 : 1;
}

function time_to_string(t)
{
  var minutes = Math.floor(t/60);
    if(minutes < 10) minutes = '0' + minutes;
  var seconds = Math.floor(t)%60;
    if(seconds < 10) seconds = '0' + seconds;
  return "" + minutes + ':' +  seconds;
}
