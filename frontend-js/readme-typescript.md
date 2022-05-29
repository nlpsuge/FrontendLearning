# Keywords

## [`as`](https://www.designcise.com/web/tutorial/what-is-the-typescript-as-keyword-used-for)

* Used to **cast a value to a more specific or less specific version of the expected type**;
* Commonly used when you have information about the specific type for the value that **TypeScript may not be able to determine on its own**;
* Equivalent to the angle-bracket syntax (but casting/asserting type with **"as" is the recommended way**).

```js
const checkbox = document.getElementById('myCheckbox') as HTMLInputElement;

// equivalent to the angle-bracket syntax:
// const checkbox = <HTMLInputElement>document.getElementById('myCheckbox');
```

 If you were to specify a type which is not a subset or superset of the expected type, then TypeScript would result in an error: 
```js
// Error: Conversion of type 'HTMLElement | null' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
const checkbox = document.getElementById('myCheckbox') as string;
```

**the "as" keyword does not perform any type assertions at runtime (as it's removed at compile-time). Therefore, this won't throw an exception or return null if the type assertion fails at runtime.**

# [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

Enums are compatible with numbers, and numbers are compatible with enums. Enum values from different enum types are considered incompatible. 

TypeScript provides both numeric and string-based enums.

An enum can be defined using the `enum` keyword.

## Numeric enums

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

If we wanted, we could leave off the initializers entirely:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

Here, Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.

Numeric enums can be mixed in [computed and constant members (see below)](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members). The short story is, enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members. In other words, the following isn’t allowed:

```ts
enum E {
  A = getSomeValue(),
  B,
Enum member must have initializer.

}
```

## String enums
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

