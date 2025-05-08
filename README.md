# Understanding TypeScript: Enums, any, unknown, and never

This blog helps understand two important topics in TypeScript:
- How enums work
- The difference between `any`, `unknown`, and `never` types

---

## What is an `enum` in TypeScript?

An `enum` is a list of fixed values. we use it when we want to give **names** to a group of related values.

### 🔸 Why use enums?
- To make our code **easy to read**
- To **avoid mistakes**
- To group values together

### 🔹 Numeric enum example:

```ts
enum Direction {
  North,   // 0
  East,    // 1
  South,   // 2
  West     // 3
}

let myDirection = Direction.South;

console.log(myDirection);      // 2
console.log(Direction[2]);     // "South"
```

### 🔹 String enum example:

```ts
enum Status {
  Success = "SUCCESS",
  Fail = "FAIL"
}

let result = Status.Success;

console.log(result);           // "SUCCESS"
```

---

## Difference between `any`, `unknown`, and `never`

These are special types in TypeScript that help us write better and safer code.

### `any` — Anything is allowed

```ts
let value: any = "hello";
value = 123;
value.toUpperCase();  // No error
```

- TypeScript lets us do anything
- Not safe — no type checking

---

### `unknown` — Anything is allowed, but type must be checked

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());  // Safe
}
```

- Safer than `any`
- We must **check the type** before using

---

### `never` — No value is returned

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```

- Use when a function **never finishes**
- For example, errors or infinite loops
