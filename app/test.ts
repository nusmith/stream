import { env } from "process";

export function something() {
    console.log('helloooo');
    const x = env.my_secret_key;
}