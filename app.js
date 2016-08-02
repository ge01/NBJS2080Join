/****************************************************
*                    join and pop                   *
****************************************************/
var movies = new Array("Avatar", "Good Wiil Hunting", "Vanilla Sky", "Fight Club");

var string1 = movies.join();
var string2 = movies.join(" - ");
document.write(string1);
document.write("<br>");
document.write(string2);
document.write("<br>");

document.write(movies[3] + "<br>");
movies.pop();
document.write(string2 + "<br>");
