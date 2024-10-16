// Time complexity -> o(n - 1) = O(N)
// Space complexity - o(n) = O(N)
// Using bottom-up approach, starting from base case (n)
// Concept of decision tree -> bnary-tree for number of decision, this case one or two steps
// so 2 decisions for each branch
// Subproblem depends on another subproblem until the tree is reaching base case
// Have a dp array to store the cache or any sub-program
// For example n = 5 steps, only 1 way can achieve 5 from decision tree, which is 4
// In 4 how many ways can reach 5, only 1 way
// In 3 how many ways can reach 5, (3 -> 4) (subproblem of 4) + 3 -> 5
// In 2 how many ways can reach 5, (2 -> 3) (subproblem of 3) + (subpromblem of 4)
// In 1 how many ways can reach 5, (1 -> 2) (subproblem of 2) + (subproblem of 3)
// like fib sequence


// In this kind of question, draw the decision tree first
// Then find the base case, and observe the sequence
// originally no 0 case only 1 term => 1, 2 term => 2 ; deduced to 0 => 1, 1 => 1

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let [one, two] = [1, 1];
  for (i=0; i < n - 1; i++) {
      let tempt = one;
      one = one + two;
      two = tempt;
  }
  return one;
};
console.log(climbStairs(5));