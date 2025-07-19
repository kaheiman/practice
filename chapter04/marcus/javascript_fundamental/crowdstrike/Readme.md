(String Compression)
1. https://leetcode.com/problems/string-compression/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-three-months
  - return existing arr
  - join("").split("") // "12" => "1", "2"


(Number of Islands)
2. https://leetcode.com/problems/number-of-islands/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
  - make sure dirs is correct


(Trapping Rain Water)
3. https://leetcode.com/problems/trapping-rain-water/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
    - right-- not right++
    - let right = height.length

(Spiral Matrix)
4. https://leetcode.com/problems/spiral-matrix/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
  - add condition for all processing

(Merge Intervals)
5. https://leetcode.com/problems/merge-intervals/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
 - array is pass by reference, modify of array a will update array b
 - sort array

(Encode and Decode Strings)
6. https://leetcode.com/problems/encode-and-decode-strings/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
 - Number.isInteger
 - parseInt
 - indexOf("", idx) // starting from idx
 - string cannot splice
 - string can slice / substring 
 - number of word return from slice and substring eg: a.slice(0, 3) = 3 - 0
 - Time Complexity: O(n), where n denote the total number of characters across all strings in the input list
 - Space Complexity: O(K), number of strings

(Best Time to Buy and Sell Stock)
7. https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
- Math.max

(Move Zeros)
8. https://leetcode.com/problems/move-zeroes/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
- must use lastNonZeroIdx, cannot use lastZeroIdx
 
(Squares of a Sorted Array)
9. https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=company&envId=crowdstrike&favoriteSlug=crowdstrike-all
- Math.pow()
- left right pointer, find max, move the pointer with smaller

PS: use copy and paste variable can reduce mistake 