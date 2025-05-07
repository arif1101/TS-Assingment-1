function formatSrtring(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatSrtring("arif"));

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
//   concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
//   concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
  