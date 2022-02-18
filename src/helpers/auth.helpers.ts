import React from 'react';

/**
  * To use this function, you need to pass the name of the input through. It allows us to
  * know which key needs to be filled in.
  * @param e
  */
export function onInputChange<T> (e: React.ChangeEvent<HTMLInputElement>, setState: { (value: T): void }, userInput: T): void {
    const { name, value } = e.target;
    setState({ ...userInput, [name]: value });
}
