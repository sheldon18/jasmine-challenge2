{"filter":false,"title":"gameSpec.js","tooltip":"/scripts/gameSpec.js","undoManager":{"mark":43,"position":43,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["d"],"id":1},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["e"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["s"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["c"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["r"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["i"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["b"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":10},"action":"insert","lines":["()"],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":10},"action":"remove","lines":["describe()"],"id":3},{"start":{"row":0,"column":0},"end":{"row":0,"column":10},"action":"insert","lines":["describe()"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":10},"action":"remove","lines":["describe()"],"id":4},{"start":{"row":0,"column":0},"end":{"row":4,"column":7},"action":"insert","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        drink = new whatCanIDrink();","    });"]}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":35},"action":"remove","lines":["My whatCanIDrink function"],"id":5},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["F"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["i"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["z"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["z"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["B"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["u"]}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["z"],"id":6},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["z"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":[" "],"id":7},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["f"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["u"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["c"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["n"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["t"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["i"]},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["o"]},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":13},"action":"remove","lines":["drink"],"id":8},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["n"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["u"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["m"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["b"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":34},"action":"remove","lines":["whatCanIDrink"],"id":9},{"start":{"row":3,"column":21},"end":{"row":3,"column":29},"action":"insert","lines":["fizzBuzz"]}],[{"start":{"row":4,"column":7},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["}"],"id":11}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[";"],"id":12}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[")"],"id":13}],[{"start":{"row":4,"column":7},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":6,"column":4},"end":{"row":23,"column":7},"action":"insert","lines":["describe(\"Addition tests\", function() {","        it(\"should return 42\", function() {","            calc.add(20);","            calc.add(22);","            expect(calc.value).toBe(42);","        });","        it(\"should return 26\", function() {","            calc.add(7);","            calc.add(19);","            expect(calc.value).toBe(26);","        });","        it(\"should return an error if we dont supply two numbers\", function() {","            spyOn(window, \"alert\");","            calc.add(\"HitchHikers\");","            expect(window.alert).toHaveBeenCalledWith(\"Error!\");","            ","        });","    });"],"id":16}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":22},"action":"remove","lines":["Addition"],"id":17},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["d"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["i"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["v"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["i"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["s"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["i"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["o"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"remove","lines":["2"],"id":18}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":16},"action":"remove","lines":["calc"],"id":19},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["n"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["u"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["m"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["b"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":22},"action":"remove","lines":["add"],"id":20},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["d"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["i"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["v"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["i"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["d"]}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["d"],"id":21}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":23},"action":"remove","lines":["divi"],"id":22},{"start":{"row":8,"column":19},"end":{"row":8,"column":27},"action":"insert","lines":["division"]}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":20},"action":"remove","lines":["calc.add"],"id":23},{"start":{"row":9,"column":12},"end":{"row":9,"column":27},"action":"insert","lines":["number.division"]}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":23},"action":"remove","lines":["calc"],"id":24},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["n"]},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["y"]}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["y"],"id":25}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["u"],"id":26},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["m"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["b"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["e"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":38},"end":{"row":10,"column":41},"action":"remove","lines":["42)"],"id":27},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["4"]}],[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":[")"],"id":28}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":30},"action":"remove","lines":["20"],"id":29},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["1"]},{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["6"]}],[{"start":{"row":9,"column":28},"end":{"row":9,"column":30},"action":"remove","lines":["22"],"id":30},{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["4"]}],[{"start":{"row":12,"column":0},"end":{"row":22,"column":11},"action":"remove","lines":["        it(\"should return 26\", function() {","            calc.add(7);","            calc.add(19);","            expect(calc.value).toBe(26);","        });","        it(\"should return an error if we dont supply two numbers\", function() {","            spyOn(window, \"alert\");","            calc.add(\"HitchHikers\");","            expect(window.alert).toHaveBeenCalledWith(\"Error!\");","            ","        });"],"id":31}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"remove","lines":["n"],"id":32},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"remove","lines":["c"]}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["n"],"id":33},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["c"]}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":27},"action":"remove","lines":["sion"],"id":34},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["d"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":23},"end":{"row":9,"column":26},"action":"remove","lines":["sio"],"id":35},{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["d"]},{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"remove","lines":["n"],"id":36}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":31},"action":"remove","lines":["number.value"],"id":37},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["6"]}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":[" "],"id":38},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["%"]}],[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":[" "],"id":39},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["4"]}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["1"],"id":40}],[{"start":{"row":14,"column":7},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":42},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":52,"column":3},"action":"insert","lines":["describe(\"My fizzBuzz function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    ","    beforeEach(function() {","        fizzbuzz = new fizzBuzz();","    });","    ","    describe(\"Returns number, fizz, buzz or fizzbuzz\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            // Expectations are built with the function expect which takes a value, called the actual. ","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.","            expect(fizzBuzz).toBeDefined();","        });","        ","        it(\"should return Fizz when called as fizzBuzz(9)\", function() {","            var result = fizzBuzz(9)","            expect(result).toBe(\"Fizz\");","        });","                ","        it(\"should return Buzz when called as fizzBuzz(10)\", function() {","            var result = fizzBuzz(10)","            expect(result).toBe(\"Buzz\");","        });","        ","        it(\"should return FizzBuzz when called as fizzBuzz(15)\", function() {","            var result = fizzBuzz(15)","            expect(result).toBe(\"FizzBuzz\");","        });","        it(\"should return 2 when called as fizzBuzz(2)\", function() {","            var result = fizzBuzz(2)","            expect(result).toBe(2);","        });","    });","});"],"id":43}],[{"start":{"row":0,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["describe(\"FizzBuzz function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        number = new fizzBuzz();","    });","    ","    describe(\"division tests\", function() {","        it(\"should return 4\", function() {","            number.divide(16);","            number.divide(4);","            expect(16 % 4).toBe(4);","        });","","    });","});    ",""],"id":44}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":45},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":12},"end":{"row":0,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560942162093,"hash":"030d0107a28de986c61959e341c56beb4e02a1d1"}