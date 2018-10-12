
    afterEach(function() {
        document.body.removeChild(document.getElementById('app'));
    });

    describe('Calc ', function() {
         it('update function should exist', function() {
            update(1);
	    expect(document.getElementById("screen").value).toBe('1');

        });
it('update function should exist', function() {
            update(2);
	    expect(document.getElementById("screen").value).toBe('2');

        });
it('update function should exist', function() {
            update(3);
	    expect(document.getElementById("screen").value).toBe('3');

        });
it('update function should exist', function() {
            update(4);
	    expect(document.getElementById("screen").value).toBe('4');

        });
it('update function should exist', function() {
            update(5);
	    expect(document.getElementById("screen").value).toBe('5');

        });
it('update function should exist', function() {
            update(6);
	    expect(document.getElementById("screen").value).toBe('6');

        });
it('update function should exist', function() {
            update(7);
	    expect(document.getElementById("screen").value).toBe('7');

        });
it('update function should exist', function() {
            update(8);
	    expect(document.getElementById("screen").value).toBe('8');

        });
it('update function should exist', function() {
            update(9);
	    expect(document.getElementById("screen").value).toBe('9');

        });
it('update function should exist', function() {
            update(0);
	    expect(document.getElementById("screen").value).toBe('0');

        });

it('update function should exist', function() {
            update('*');
	    expect(document.getElementById("screen").value).toBe('*');

        });
it('update function should exist', function() {
            update('+');
	    expect(document.getElementById("screen").value).toBe('+');

        });
        
it('update function should exist', function() {
            update('-');
	    expect(document.getElementById("screen").value).toBe('-');

        });
it('update function should exist', function() {
            update('/');
	    expect(document.getElementById("screen").value).toBe('/');

        });
it('result function should exist', function() {
            update(7);
	    update('+');
	    update(8);
	    result();
	    expect(document.getElementById("screen").value).toBe('15');

        });
it('reset function should exist', function() {
            update(7);
	    reset();
	    expect(document.getElementById("screen").value).toBe('');
	});


    });
