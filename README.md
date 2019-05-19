# Calcvisa

Calculate *SUM* and *MULTIPLY* on user input.
To calculate both methods the decision was made to use **reduce()**. That one will call a function that
returns a result from the methods. This will make the 
calculator in theory dynamic since user can add more
methods to methods list and add new calculation function.

View file `src/app/component/result/result.component.ts` and take a look at `method` property on line 30. By adding more values to the array property user can make for example a division or withdraw on user input. Only needed is a function similar to those called `sum` and `multiply`.

I have commented out one method to test.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
