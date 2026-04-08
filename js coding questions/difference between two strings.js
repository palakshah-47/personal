/*Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.

For example, with strings source = "ABCDEFG", and target = "ABDFFGH" we might return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"

More formally, for each character C in source, we will either write the token C, which does not count as an edit; or write the token -C, which counts as an edit.

Additionally, between any token that we write, we may write +D where D is any letter, which counts as an edit.

At the end, when reading the tokens from left to right, and not including tokens prefixed with a minus-sign, the letters should spell out target (when ignoring plus-signs.)

In the example, the answer of A B -C D -E F +F G +H has total number of edits 4 (the minimum possible), and ignoring subtraction-tokens, spells out A, B, D, F, +F, G, +H which represents the string target.

If there are multiple answers, use the answer that favors removing from the source last.
*/

/*
DP idea
-------
dp[i][j] = minimum edits needed to convert:
source[0 ... i - 1]  ->  target[0 ... j - 1]

Meaning of operations in the final answer:
- "A"  : keep the character, no edit
- "-A" : delete A from source
- "+A" : insert A into source

Example:
source = "ABCDEFG"
target = "ABDFFGH"

DP table for the example
rows    -> source prefixes
columns -> target prefixes

        ""  A  B  D  F  F  G  H
""      0   1  2  3  4  5  6  7
A       1   0  1  2  3  4  5  6
B       2   1  0  1  2  3  4  5
C       3   2  1  2  3  4  5  6
D       4   3  2  1  2  3  4  5
E       5   4  3  2  3  4  5  6
F       6   5  4  3  2  3  4  5
G       7   6  5  4  3  4  3  4

Final answer is at dp[7][7] = 4 edits.
*/

function diffStrings(source, target) {
	// m = length of source, n = length of target
	const m = source.length;
	const n = target.length;

	// Create a (m + 1) x (n + 1) table filled with 0.
	// Extra row and column are for empty-string prefixes.
	const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

	// Build the DP table from top-left to bottom-right.
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0) {
				// Source is empty, so we must insert all j target characters.
				dp[i][j] = j;
			} else if (j === 0) {
				// Target is empty, so we must delete all i source characters.
				dp[i][j] = i;
			} else if (source[i - 1] === target[j - 1]) {
				// Current characters match.
				// No new edit is needed, so copy the diagonal value.
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				// Characters do not match, so we have 2 choices:
				// 1. Delete source[i - 1]  -> dp[i - 1][j]
				// 2. Insert target[j - 1]  -> dp[i][j - 1]
				// Take the cheaper option and add 1 edit.
				dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	// Start from the bottom-right corner and rebuild the answer.
	// We walk backward, then reverse at the end.
	let i = m,
		j = n;
	const result = [];

	while (i > 0 || j > 0) {
		// Case 1: characters match, so keep the character.
		// Move diagonally because both strings consumed one character.
		if (i > 0 && j > 0 && source[i - 1] === target[j - 1]) {
			result.push(source[i - 1]);
			i--;
			j--;
		}
		// Case 2: insertion.
		// If moving left explains the current value, then target[j - 1]
		// was inserted. On ties, this code prefers insertion first.
		else if (j > 0 && (i === 0 || dp[i][j] === dp[i][j - 1] + 1)) {
			result.push('+' + target[j - 1]);
			j--;
		}
		// Case 3: deletion.
		// Otherwise source[i - 1] must have been deleted.
		else {
			result.push('-' + source[i - 1]);
			i--;
		}
	}

	// Backtracking builds the answer from end to start,
	// so reverse it before returning.
	return result.reverse();
}
