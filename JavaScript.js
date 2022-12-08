<script>
// Javascript program to implement Goldbach's
// conjecture
let MAX = 10000;

// Array to store all prime less than
// and equal to 10^6
let primes = new Array();

// Utility function for Sieve of Sundaram
function sieveSundaram()
{
	// In general Sieve of Sundaram, produces
	// primes smaller than (2*x + 2) for a
	// number given number x. Since we want
	// primes smaller than MAX, we reduce
	// MAX to half. This array is used to
	// separate numbers of the form i + j + 2*i*j
	// from others where 1 <= i <= j
	let marked = new Array(parseInt(MAX / 2) + 100).fill(false);

	// Main logic of Sundaram. Mark all
	// numbers which do not generate prime
	// number by doing 2*i+1
	for (let i = 1; i <= (Math.sqrt(MAX) - 1) / 2; i++)
		for (let j = (i * (i + 1)) << 1;
			j <= MAX / 2; j = j + 2 * i + 1)
			marked[j] = true;

	// Since 2 is a prime number
	primes.push(2);

	// Print other primes. Remaining primes
	// are of the form 2*i + 1 such that
	// marked[i] is false.
	for (let i = 1; i <= MAX / 2; i++)
		if (marked[i] == false)
			primes.push(2 * i + 1);
}

// Function to perform Goldbach's conjecture
function findPrimes(n)
{
	// Return if number is not even
	// or less than 3
	if (n <= 2 || n % 2 != 0)
	{
		document.write("Invalid Input <br>");
		return;
	}

	// Check only upto half of number
	for (let i = 0; primes[i] <= n / 2; i++)
	{
		// find difference by subtracting
		// current prime from n
		let diff = n - primes[i];

		// Search if the difference is also a
		// prime number
		if (primes.includes(diff))
		{
			// Express as a sum of primes
			document.write(primes[i] + " + " + diff + " = " + n + "<br>");
			return;
		}
	}
}

// Driver code

// Finding all prime numbers before limit
sieveSundaram();

// Express number as a sum of two primes
findPrimes(4);
findPrimes(38);
findPrimes(100);

// This code is contributed by gfgking
</script>
