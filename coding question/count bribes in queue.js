/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride.]
 * Each person wears a sticker indicating their initial position in the queue from  to . 
 * Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
 * One person can bribe at most two others. Determine the minimum number of bribes that took place to get to 
 * a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
Example: q = [1,2,3,4,5,6,7,8]
If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. Only  bribe is required. Print 1.
q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

Explaination:
Let's begin:
1. Bribing the person in front of you is the only way to go forward. Take note of this point.
2. Instances of numbers greater than you in front of you = Bribe count
3. Do we really have to check everyone in our front?
-->First, to eliminate the chaotic cases - obviously any person who is more than 2 positions 
ahead of their initial position cannot be there since they could not have bribed more than twice.

-->Question to ask yourself: How can I know how many times have I been bribed if I am the one standing in the queue?

--> Every person with a number greater than me who is now standing ahead of me must have bribed me at some point.

--> So starting from one position in front of you, check through the row in front of you 
and count the instances of numbers greater than yours. 
Hence, Instances of numbers greater than you in front of you = Bribe count.

Final step, notice the inner loop for this condition starts from j=i-2 
(1 position in front of you) and goes to either 0 (beginning of queue) or your 
original position - 1 i.e q[i-1]-2 : whichever is maximum of the two.

Why?

1 2 3 4 5 6 7 8 9 10
1 2 3 5 6 7 8 9 10 4 : 6 bribes
1 2 5 3 6 7 8 9 10 4 : 7 bribes
1 5 2 3 6 7 8 9 10 4 : 8 bribes BUT 5 has now bribed three people - 4,3,2 so this won't happen.
So you only needed to check till one position in front of you.

That will be in this instance q[3] - 2 = 4 -2 = 2 (indexing starting from 0, initial position of 4 is 3)
 */

function minimumBribe(arr) {
    let bribes = 0;
    for (let i = arr.length-1 ; i >=0 ;i--){
        if (arr[i] - (i+1) > 2) {
            return "Too Chaotic";
        }
        //inner loop to Check to front of my position, 
        //if there are numbers greater than me then they must have bribed me to get ahead.
        for (let j = Math.max(0, arr[i] - 2); j < i; j++){
            if (arr[j] > arr[i]) bribes++;
        }
    }
    return bribes;
}
 
console.log(minimumBribe([2,1,5,3,4]))