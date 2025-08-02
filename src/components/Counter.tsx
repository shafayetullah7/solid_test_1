import { Component, createEffect, createSignal } from "solid-js";

export const Counter: Component = () => {
    const [count, setCount] = createSignal(0);
    const [double, setDouble] = createSignal(0);

    createEffect(() => {
        setDouble(count() * 2);
    })

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    return (
        <div class='w-fit mx-auto mt-32 flex flex-col gap-10 items-center'>
            <p class='font-semibold text-2xl'>Count: {count()}</p>
            <p class='font-semibold text-2xl'>Count: {double()}</p>
            <div class='flex w-[100px] justify-between'>
                <button class='bg-green-500 px-4 rounded text-xl font-bold text-white' onclick={increment}>+</button>
                <button class='bg-red-500 px-4 rounded text-xl font-bold text-white' onclick={decrement}>-</button>

            </div>
            {count() % 2 == 0 ? <p>Even</p> : <p>Odd</p>}
        </div>

    );
}