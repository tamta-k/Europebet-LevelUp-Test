/* თქვენს დაწერილ ფუნქციას გადმოეცემა შემდეგი პარამეტრები:
jewels (string) ასახავს ძვირფას ქვებს;
stones (string) ასახავს ქვებს, რომლებიც თქვენ გეკუთვნით;
გადმოცემული სტრინგების ყოველი ასო აღნიშნავს ინდივიდუალურ ქვას, ყოველი
განსხვავებული ასო აღნიშნავს ქვის ტიპს (მაგ. a, A, b, B, c ...).
თქვენი მიზანია დაწეროთ ფუნქცია, რომელიც მიიღებს პარამეტრებად ამ ორ სტრინგს
(jewels, stones) და დაითვლის ამ ქვებში, რომლებიც თქვენ გეკუთვნით (ანუ stones),
რამდენი ძვირფასი ქვა არის.
var numJewelsInStones = function(jewels, stones) {
//თქვენი კოდი უნდა დაწეროთ აქ
}; */

let numJewelsInStones = function(jewels, stones) {
    let counter = 0;
    for ( element of jewels){
        for (el of stones){
            if (element === el) {
                ++counter;
            }
            else {
                continue;
            }
        }
    }

    return counter;
};